"use strict";

const webServer = require('./template-chart/web-server.js');
const captureWebPage = require('./capture-web-page.js');

function renderLineChart (data, chartSize, outputImagePath) {
    return webServer.start(data, chartSize)
        .then(server => {
            const urlToCapture = "http://localhost:3000";
            return captureWebPage(urlToCapture, "svg", outputImagePath)
                .then(() => server.close());
        });
};

module.exports = {
    renderLineChart: renderLineChart,

    // ... You might want to add other chart types here ...
};