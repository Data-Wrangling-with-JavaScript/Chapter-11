"use strict";

const webServer = require('./web-server.js');
const Nightmare = require('nightmare');

webServer.start()
    .then(server => {
        const nightmare = Nightmare({ // Create an Nightmare instance.
            show: true, // Show the window, ultimately we don't need this but it's useful to see what's going on when we are just getting started.
            openDevTools: { mode: "detach" } // Open the dev tools for the web page so we can trouble shoot if necessary.
        }); 

        return nightmare.goto("http://localhost:3000") // Point the browser at the web server we just started.
            .wait("svg") // Wait until the chart appears on screen. 
            .screenshot("./output/nyc-temperatures.png") // Capture a screenshot to an image file.
            .end() // End the Nightmare session. Any queued operations are complated and the headless browser is terminated.
            .then(() => {
                return server.close(); // Stop the web server when we are done.
            })
    })
    .then(() => {
        console.log("All done :)");
    })
    .catch(err => {
        console.error("Something went wrong :(");
        console.error(err);
    })
