"use strict";

const webServer = require('./web-server.js');
const Nightmare = require('nightmare');

webServer.start()
    .then(server => {
        const nightmare = Nightmare(); // Create an Nightmare instance.
        return nightmare.goto("http://localhost:3000") // Point the browser at the web server we just started.
            .wait("svg") // Wait until the graphics for the chart appear on screen. 
            .evaluate(() => { // Evaluate JavaScript code within the headless browser. This function returns a promise which changes the way our code works.
                const body = document.querySelector("body"); // Find the body element of the web page.
                const captureElement = document.querySelector("svg"); // Find the chart's element in the DOM. This is the element that we want to capture.
                const captureRect = captureElement.getBoundingClientRect(); // Get the area that we want to capture.
                return { // Return details computed in the headless browser to Node.js.
                    documentArea: { // Return the scrollable area of the page, we will expand the size of the browser window to cover the entire documents (thus removing any scrollbars we might otherwise capture).
                        width: body.scrollWidth,
                        height: body.scrollHeight
                    },
                    captureArea: { // Return the rect of the area of the page (e.g. the chart) that we want to capture.
                        x: captureRect.left,
                        y: captureRect.top,
                        width: captureRect.right - captureRect.left,
                        height: captureRect.bottom - captureRect.top
                    }
                };
            })
            .then(pageDetails => { // Retrieve details computed in the headless browser. We can now use these value in subsequent Node.js code.
                const outputImagePath = "./output/nyc-temperatures.png";
                console.log(">> " + outputImagePath);
                return nightmare.viewport(pageDetails.documentArea.width, pageDetails.documentArea.height) // Set the viewport to cover the area of the chart.
                    .screenshot(outputImagePath, pageDetails.captureArea) // Capture a screenshot to an image file.
                    .end(); // End the Nightmare session. Any queued operations are complated and the headless browser is terminated.
            })
            .then(() => server.close()); // Stop the web server when we are done.
    })
    .then(() => {
        console.log("All done :)");
    })
    .catch(err => {
        console.error("Something went wrong :(");
        console.error(err);
    })
