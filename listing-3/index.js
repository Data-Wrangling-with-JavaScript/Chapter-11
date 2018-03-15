"use strict";

const webServer = require('./web-server.js'); // Include our reusable web server module.

webServer.start() // Start the web server.
    .then(server => {
        console.log("Web server has started!");

        // ... Do something with the web server here, 
        //     eg capture a screen shot of the web page or 
        //     run automated integration tests against it  ...

        server.close(); // Stop the web server when we are finished with it.
    })
    .then(() => {
        console.log("Web server has stopped.");
    })
    .catch(err => {
        console.error("Web server failed to start :(");
        console.error(err);
    });