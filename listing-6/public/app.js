//
// Simplest possible example of a C3 chart in a web page.
//
// Based on the example line chart: http://c3js.org/samples/simple_multiple.html
//
// To run this, first install bower, then install live-server:
//
//      npm install -g bower
//
//      npm install -g live-server
//
// Then change directory to the same directory as this file and install dependencies:
//
//      bower install
//
// Then run live server from the same directory as this file:
//
//      live-server
//
// Your browser will open and a line chart will be rendered.
//

"use strict";

$(function () {

    $.get("nyc-temperature.csv")
        .then(function (response) {
            var parseOptions = {
                header: true,
                dynamicTyping: true
            };
            var parsed = Papa.parse(response, parseOptions);

            var chart = c3.generate({
                bindto: "#chart", // This is the default, but let's make it explicit in case you want to capture multiple charts in the one web page.
                size: { // We should set the size of the chart to something that is appropriate.
                    width: 600,
                    height: 300
                },
                data: {
                    json: parsed.data,
                    keys: {
                        x: "Year",
                        value: [
                            "AvgTemp"
                        ]
                    }
                },
                transition: {
                    duration: 0 // Disable animated transitions when we are capturing a static image.
                }
            });
        })
        .catch(function (err) {
            console.error(err);
        });

});

