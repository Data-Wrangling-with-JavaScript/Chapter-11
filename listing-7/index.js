"use strict";

const charts = require('./toolkit/charts.js');

const chartSize = { // Specify the size of the chart.
    width: 600,
    height: 300
};

const myData = { // Specify the data for the chart, this is used directly as the 'data' field in the C3 chart definition.
    json: [ // Hard-coded JSON data, just to show you can that you can plug whatever data you want into this chart.
        {
          "Year": 1917,
          "MinTemp": -25,
          "MaxTemp": 37.8,
          "AvgTemp": 10.547245179063365
        },
        {
          "Year": 1918,
          "MinTemp": -21.1,
          "MaxTemp": 40,
          "AvgTemp": 11.825205479452052
        },
        {
          "Year": 1919,
          "MinTemp": -18.3,
          "MaxTemp": 37.2,
          "AvgTemp": 12.125824175824178
        },
        {
          "Year": 1920,
          "MinTemp": -18.9,
          "MaxTemp": 34.4,
          "AvgTemp": 11.286475409836074
        },
        {
          "Year": 1921,
          "MinTemp": -15.6,
          "MaxTemp": 35.6,
          "AvgTemp": 12.751095890410959
        },
        {
          "Year": 1922,
          "MinTemp": -18.9,
          "MaxTemp": 34.4,
          "AvgTemp": 12.001369863013698
        },
        {
          "Year": 1923,
          "MinTemp": -13.9,
          "MaxTemp": 37.2,
          "AvgTemp": 11.665753424657524
        },
        {
          "Year": 1924,
          "MinTemp": -15,
          "MaxTemp": 37.2,
          "AvgTemp": 11.08784153005464
        },
        {
          "Year": 1925,
          "MinTemp": -18.9,
          "MaxTemp": 37.2,
          "AvgTemp": 11.937637362637368
        },
        {
          "Year": 1926,
          "MinTemp": -15,
          "MaxTemp": 37.8,
          "AvgTemp": 10.772865013774107
        },
        {
          "Year": 1927,
          "MinTemp": -18.3,
          "MaxTemp": 33.3,
          "AvgTemp": 11.932465753424664
        },
        {
          "Year": 1928,
          "MinTemp": -13.9,
          "MaxTemp": 34.4,
          "AvgTemp": 11.961157024793385
        },
        {
          "Year": 1929,
          "MinTemp": -13.3,
          "MaxTemp": 37.2,
          "AvgTemp": 12.328082191780814
        },
        {
          "Year": 1930,
          "MinTemp": -13.9,
          "MaxTemp": 38.9,
          "AvgTemp": 12.53301369863014
        },
        {
          "Year": 1931,
          "MinTemp": -11.7,
          "MaxTemp": 37.2,
          "AvgTemp": 13.26561643835617
        },
        {
          "Year": 1932,
          "MinTemp": -11.7,
          "MaxTemp": 35.6,
          "AvgTemp": 12.900961538461535
        },
        {
          "Year": 1933,
          "MinTemp": -21.1,
          "MaxTemp": 38.9,
          "AvgTemp": 12.447099447513821
        },
        {
          "Year": 1934,
          "MinTemp": -26.1,
          "MaxTemp": 38.3,
          "AvgTemp": 11.733150684931507
        },
        {
          "Year": 1935,
          "MinTemp": -18.3,
          "MaxTemp": 35,
          "AvgTemp": 11.739041095890402
        },
        {
          "Year": 1936,
          "MinTemp": -19.4,
          "MaxTemp": 41.1,
          "AvgTemp": 11.940027322404374
        },
        {
          "Year": 1937,
          "MinTemp": -10,
          "MaxTemp": 37.8,
          "AvgTemp": 12.546428571428576
        },
        {
          "Year": 1938,
          "MinTemp": -14.4,
          "MaxTemp": 35.6,
          "AvgTemp": 12.938356164383551
        },
        {
          "Year": 1939,
          "MinTemp": -14.4,
          "MaxTemp": 35.6,
          "AvgTemp": 12.62821917808219
        },
        {
          "Year": 1940,
          "MinTemp": -13.9,
          "MaxTemp": 36.7,
          "AvgTemp": 11.04616438356164
        },
        {
          "Year": 1941,
          "MinTemp": -12.2,
          "MaxTemp": 36.7,
          "AvgTemp": 12.78082191780821
        },
        {
          "Year": 1942,
          "MinTemp": -20,
          "MaxTemp": 36.1,
          "AvgTemp": 12.310714285714294
        },
        {
          "Year": 1943,
          "MinTemp": -22.2,
          "MaxTemp": 37.2,
          "AvgTemp": 12.117671232876717
        },
        {
          "Year": 1944,
          "MinTemp": -11.1,
          "MaxTemp": 38.9,
          "AvgTemp": 12.637534246575356
        },
        {
          "Year": 1945,
          "MinTemp": -16.7,
          "MaxTemp": 36.1,
          "AvgTemp": 12.307808219178066
        },
        {
          "Year": 1946,
          "MinTemp": -15,
          "MaxTemp": 34.4,
          "AvgTemp": 13.040273972602742
        },
        {
          "Year": 1947,
          "MinTemp": -13.9,
          "MaxTemp": 35,
          "AvgTemp": 12.159041095890403
        },
        {
          "Year": 1948,
          "MinTemp": -17.8,
          "MaxTemp": 39.4,
          "AvgTemp": 12.316986301369864
        },
        {
          "Year": 1949,
          "MinTemp": -8.3,
          "MaxTemp": 38.9,
          "AvgTemp": 13.88131868131868
        },
        {
          "Year": 1950,
          "MinTemp": -14.4,
          "MaxTemp": 35,
          "AvgTemp": 12.076373626373627
        },
        {
          "Year": 1951,
          "MinTemp": -13.3,
          "MaxTemp": 34.4,
          "AvgTemp": 12.815479452054786
        },
        {
          "Year": 1952,
          "MinTemp": -13.3,
          "MaxTemp": 37.8,
          "AvgTemp": 13.236202185792356
        },
        {
          "Year": 1953,
          "MinTemp": -10,
          "MaxTemp": 38.9,
          "AvgTemp": 13.947796143250693
        },
        {
          "Year": 1954,
          "MinTemp": -13.9,
          "MaxTemp": 37.8,
          "AvgTemp": 12.737671232876705
        },
        {
          "Year": 1955,
          "MinTemp": -17.8,
          "MaxTemp": 37.8,
          "AvgTemp": 12.68255494505495
        },
        {
          "Year": 1956,
          "MinTemp": -10,
          "MaxTemp": 37.2,
          "AvgTemp": 11.957240437158474
        },
        {
          "Year": 1957,
          "MinTemp": -17.8,
          "MaxTemp": 38.3,
          "AvgTemp": 13.081318681318683
        },
        {
          "Year": 1958,
          "MinTemp": -16.1,
          "MaxTemp": 33.9,
          "AvgTemp": 11.46863013698631
        },
        {
          "Year": 1959,
          "MinTemp": -13.9,
          "MaxTemp": 36.1,
          "AvgTemp": 13.060273972602742
        },
        {
          "Year": 1960,
          "MinTemp": -13.3,
          "MaxTemp": 32.8,
          "AvgTemp": 12.23196721311476
        },
        {
          "Year": 1961,
          "MinTemp": -18.9,
          "MaxTemp": 36.1,
          "AvgTemp": 12.839589041095888
        },
        {
          "Year": 1962,
          "MinTemp": -15.6,
          "MaxTemp": 37.2,
          "AvgTemp": 11.958630136986303
        },
        {
          "Year": 1963,
          "MinTemp": -18.9,
          "MaxTemp": 36.7,
          "AvgTemp": 12.046575342465754
        },
        {
          "Year": 1964,
          "MinTemp": -12.8,
          "MaxTemp": 37.2,
          "AvgTemp": 12.555191256830605
        },
        {
          "Year": 1965,
          "MinTemp": -12.8,
          "MaxTemp": 35,
          "AvgTemp": 12.37712328767122
        },
        {
          "Year": 1966,
          "MinTemp": -13.3,
          "MaxTemp": 39.4,
          "AvgTemp": 12.846849315068491
        },
        {
          "Year": 1967,
          "MinTemp": -15.6,
          "MaxTemp": 35.6,
          "AvgTemp": 11.705753424657528
        },
        {
          "Year": 1968,
          "MinTemp": -18.3,
          "MaxTemp": 36.7,
          "AvgTemp": 12.284836065573764
        },
        {
          "Year": 1969,
          "MinTemp": -11.7,
          "MaxTemp": 36.1,
          "AvgTemp": 12.702191780821918
        },
        {
          "Year": 1970,
          "MinTemp": -16.1,
          "MaxTemp": 34.4,
          "AvgTemp": 12.42027397260274
        },
        {
          "Year": 1971,
          "MinTemp": -15.6,
          "MaxTemp": 35.6,
          "AvgTemp": 12.939726027397267
        },
        {
          "Year": 1972,
          "MinTemp": -15,
          "MaxTemp": 34.4,
          "AvgTemp": 12.172540983606549
        },
        {
          "Year": 1973,
          "MinTemp": -13.9,
          "MaxTemp": 36.7,
          "AvgTemp": 13.430821917808212
        },
        {
          "Year": 1974,
          "MinTemp": -14.4,
          "MaxTemp": 35,
          "AvgTemp": 12.660684931506855
        },
        {
          "Year": 1975,
          "MinTemp": -9.4,
          "MaxTemp": 36.7,
          "AvgTemp": 12.790684931506851
        },
        {
          "Year": 1976,
          "MinTemp": -18.3,
          "MaxTemp": 35.6,
          "AvgTemp": 11.859699453551904
        },
        {
          "Year": 1977,
          "MinTemp": -18.9,
          "MaxTemp": 40,
          "AvgTemp": 12.458356164383554
        },
        {
          "Year": 1978,
          "MinTemp": -12.2,
          "MaxTemp": 35,
          "AvgTemp": 11.707123287671221
        },
        {
          "Year": 1979,
          "MinTemp": -17.8,
          "MaxTemp": 35,
          "AvgTemp": 13.251780821917801
        },
        {
          "Year": 1980,
          "MinTemp": -18.3,
          "MaxTemp": 38.9,
          "AvgTemp": 12.78374316939891
        },
        {
          "Year": 1981,
          "MinTemp": -16.7,
          "MaxTemp": 35.6,
          "AvgTemp": 12.912876712328769
        },
        {
          "Year": 1982,
          "MinTemp": -17.8,
          "MaxTemp": 36.7,
          "AvgTemp": 12.749178082191776
        },
        {
          "Year": 1983,
          "MinTemp": -15.6,
          "MaxTemp": 37.2,
          "AvgTemp": 13.362191780821927
        },
        {
          "Year": 1984,
          "MinTemp": -13.3,
          "MaxTemp": 35.6,
          "AvgTemp": 13.030327868852472
        },
        {
          "Year": 1985,
          "MinTemp": -18.9,
          "MaxTemp": 35,
          "AvgTemp": 13.110821917808213
        },
        {
          "Year": 1986,
          "MinTemp": -13.3,
          "MaxTemp": 36.7,
          "AvgTemp": 12.983287671232878
        },
        {
          "Year": 1987,
          "MinTemp": -15.6,
          "MaxTemp": 36.1,
          "AvgTemp": 12.903287671232881
        },
        {
          "Year": 1988,
          "MinTemp": -15,
          "MaxTemp": 37.2,
          "AvgTemp": 12.674316939890723
        },
        {
          "Year": 1989,
          "MinTemp": -14.4,
          "MaxTemp": 35.6,
          "AvgTemp": 12.234657534246589
        },
        {
          "Year": 1990,
          "MinTemp": -13.9,
          "MaxTemp": 35,
          "AvgTemp": 14.048219178082192
        },
        {
          "Year": 1991,
          "MinTemp": -12.2,
          "MaxTemp": 38.9,
          "AvgTemp": 14.049178082191775
        },
        {
          "Year": 1992,
          "MinTemp": -11.7,
          "MaxTemp": 33.9,
          "AvgTemp": 12.195081967213117
        },
        {
          "Year": 1993,
          "MinTemp": -13.9,
          "MaxTemp": 38.9,
          "AvgTemp": 13.1131506849315
        },
        {
          "Year": 1994,
          "MinTemp": -18.9,
          "MaxTemp": 36.7,
          "AvgTemp": 12.952602739726041
        },
        {
          "Year": 1995,
          "MinTemp": -14.4,
          "MaxTemp": 38.9,
          "AvgTemp": 13.01150684931507
        },
        {
          "Year": 1996,
          "MinTemp": -15,
          "MaxTemp": 35.6,
          "AvgTemp": 12.081420765027325
        },
        {
          "Year": 1997,
          "MinTemp": -15.6,
          "MaxTemp": 36.1,
          "AvgTemp": 12.414246575342458
        },
        {
          "Year": 1998,
          "MinTemp": -10,
          "MaxTemp": 33.9,
          "AvgTemp": 14.0149315068493
        },
        {
          "Year": 1999,
          "MinTemp": -12.8,
          "MaxTemp": 38.3,
          "AvgTemp": 13.639589041095885
        },
        {
          "Year": 2000,
          "MinTemp": -16.1,
          "MaxTemp": 33.9,
          "AvgTemp": 12.131420765027318
        },
        {
          "Year": 2001,
          "MinTemp": -8.9,
          "MaxTemp": 39.4,
          "AvgTemp": 13.498493150684943
        },
        {
          "Year": 2002,
          "MinTemp": -7.2,
          "MaxTemp": 36.7,
          "AvgTemp": 13.599999999999998
        },
        {
          "Year": 2003,
          "MinTemp": -13.9,
          "MaxTemp": 34.4,
          "AvgTemp": 11.953150684931495
        },
        {
          "Year": 2004,
          "MinTemp": -17.2,
          "MaxTemp": 32.8,
          "AvgTemp": 12.515846994535524
        },
        {
          "Year": 2005,
          "MinTemp": -15,
          "MaxTemp": 37.2,
          "AvgTemp": 13.219863013698642
        },
        {
          "Year": 2006,
          "MinTemp": -9.4,
          "MaxTemp": 36.1,
          "AvgTemp": 13.841506849315062
        },
        {
          "Year": 2007,
          "MinTemp": -13.3,
          "MaxTemp": 33.3,
          "AvgTemp": 12.878493150684925
        },
        {
          "Year": 2008,
          "MinTemp": -12.2,
          "MaxTemp": 35.6,
          "AvgTemp": 12.991803278688527
        },
        {
          "Year": 2009,
          "MinTemp": -14.4,
          "MaxTemp": 33.3,
          "AvgTemp": 12.273972602739729
        },
        {
          "Year": 2010,
          "MinTemp": -10.6,
          "MaxTemp": 39.4,
          "AvgTemp": 13.783698630136989
        },
        {
          "Year": 2011,
          "MinTemp": -14.4,
          "MaxTemp": 40,
          "AvgTemp": 13.620684931506842
        },
        {
          "Year": 2012,
          "MinTemp": -10.6,
          "MaxTemp": 37.8,
          "AvgTemp": 14.093579234972683
        },
        {
          "Year": 2013,
          "MinTemp": -11.7,
          "MaxTemp": 36.7,
          "AvgTemp": 13.033150684931497
        },
        {
          "Year": 2014,
          "MinTemp": -15.5,
          "MaxTemp": 33.3,
          "AvgTemp": 12.514657534246563
        },
        {
          "Year": 2015,
          "MinTemp": -16.6,
          "MaxTemp": 36.1,
          "AvgTemp": 13.809726027397259
        },
        {
          "Year": 2016,
          "MinTemp": -18.2,
          "MaxTemp": 35.6,
          "AvgTemp": 14.016803278688531
        },
        {
          "Year": 2017,
          "MinTemp": -9.9,
          "MaxTemp": 34.4,
          "AvgTemp": 14.783536585365862
        }
    ],
    keys: {
        x: "Year",
        value: [
            "AvgTemp"
        ]
    }
};

const outputImagePath = "./output/my-output-file.png";

charts.renderLineChart(myData, chartSize, outputImagePath)
    .then(() => {
        console.log("Line chart renderered!");
    })
    .catch(err => {
        console.error("Failed to render line chart.");
        console.error(err);
    });