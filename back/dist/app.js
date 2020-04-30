"use strict";
exports.__esModule = true;
var express_1 = require("express");
var port = 3000;
express_1.app.get('/', function (req, res) { return res.send('Hello World!'); });
express_1.app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
