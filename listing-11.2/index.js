"use strict";

const express = require('express');
const path = require('path');

const app = express();

const staticFilesPath = path.join(__dirname, "public"); // Make our 'public' sub-directory accessible via HTTP.
const staticFilesMiddleWare = express.static(staticFilesPath);
app.use("/", staticFilesMiddleWare);

app.listen(3000, () => { // Start our web server!
    console.log("Web server listening on port 3000!");
});
