//
// A reusable toolkit function to capture a web page to an image file using Nightmare.
//

"use strict";

const Nightmare = require('nightmare');

//
// Capture the web page specified by URL to the specified image file.
//
function captureWebPage (urlToCapture, captureElementSelector, outputImagePath) {
    console.log("<< " + urlToCapture);
    console.log(">> " + outputImagePath);

    const nightmare = new Nightmare(); // Create an Nightmare instance.
    return nightmare.goto(urlToCapture) // Point the browser at the requested web page.
        .wait(captureElementSelector) // Wait until the specified HTML element appears on the screen. 
        .screenshot(outputImagePath) // Capture a screenshot to an image file.
        .end(); // End the Nightmare session. Any queued operations are completed and the headless browser is terminated.
};

module.exports = captureWebPage; // Export the function so we can use it in other code modules.