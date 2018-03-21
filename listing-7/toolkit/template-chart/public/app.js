"use strict";

//
// Render a chart to a particular element on the page.
//
function renderChart (bindto, data, size) {
    var chart = c3.generate({
        bindto: bindto,
        size: size,
        data: data,
        transition: {
            duration: 0 // Disable animated transitions when we are capturing a static image.
        }
    });    
};

$(function () {

    $.get("chart-data")
        .then(function (response) {
            renderChart("#chart", response.data, response.chartSize);
        })
        .catch(function (err) {
            console.error(err);
        });
});

