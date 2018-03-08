"use strict";

//
// Render a chart to a particular element on the page.
//
function renderChart (bindto, data, size) {
    var chart = c3.generate({
        bindto: bindto,
        size: size, // Set the size of the chart. Not used in this example, but we'll make use of this later.
        data: {
            json: data,
            keys: {
                x: "Year", // Specify the CSV file column to use as the X axis.
                value: [
                    "AvgTemp"
                ]
            }
        },
        transition: {
            duration: 0 // Disable animated transitions when we are capturing a static image.
        }
    });    
};

$(function () {

    $.get("nyc-temperature.csv")
        .then(function (response) {
            var parseOptions = {
                header: true,
                dynamicTyping: true
            };
            var parsed = Papa.parse(response, parseOptions);
            renderChart("#chart", parsed.data);
        })
        .catch(function (err) {
            console.error(err);
        });
});

