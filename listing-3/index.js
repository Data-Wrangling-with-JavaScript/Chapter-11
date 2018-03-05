"use strict";

const webServer = require('./web-server.js');

webServer.start()
    .then(() => {
        console.log("Web server has started!");
    })
    .catch(err => {
        console.error("Web server failed to start :(");
        console.error(err);
    });