"use strict";

const webServer = require('./web-server.js');
const Nightmare = require('nightmare');

webServer.start()
    .then(server => {
        const outputImagePath = "./output/nyc-temperatures.png";
        console.log(">> " + outputImagePath);

        const nightmare = new Nightmare(); // Create an Nightmare instance.
        return nightmare.goto("http://localhost:3000") // Point the browser at the web server we just started.
            .wait("svg") // Wait until the chart appears on screen. 
            .screenshot(outputImagePath) // Capture a screenshot to an image file.
            .end() // End the Nightmare session. Any queued operations are completed and the headless browser is terminated.
            .then(() => server.close()); // Stop the web server when we are done.
    })
    .then(() => {
        console.log("All done :)");
    })
    .catch(err => {
        console.error("Something went wrong :(");
        console.error(err);
    })
