"use strict";

const webServer = require('./web-server.js');
const Nightmare = require('nightmare');

//
// Capture the web page specified by URL to the specifed image file.
//
function captureWebPage (urlToCapture, captureElementSelector, outputImagePath) {
    console.log("<< " + urlToCapture);
    console.log(">> " + outputImagePath);

    const nightmare = Nightmare(); // Create an Nightmare instance.
    return nightmare.goto(urlToCapture) // Point the browser at the requested web page.
        .wait(captureElementSelector) // Wait until the specified HTML element appears on the screen. 
        .screenshot(outputImagePath) // Capture a screenshot to an image file.
        .end(); // End the Nightmare session. Any queued operations are complated and the headless browser is terminated.
};

webServer.start()
    .then(server => {
        const urlToCapture = "http://localhost:3000";
        const outputImagePath = "./output/nyc-temperatures.png";
        return captureWebPage(urlToCapture, "svg", outputImagePath)
            .then(() => server.close()); // Stop the web server when we are done.
    })
    .then(() => {
        console.log("All done :)");
    })
    .catch(err => {
        console.error("Something went wrong :(");
        console.error(err);
    });
