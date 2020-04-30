"use strict";
exports.__esModule = true;
var express_1 = require("express");
var port = 3000;
main();
function main() {
    var app = express_1["default"]();
    app.get('/', function (req, res) {
        //Create a communicating class
        //Ask communicating class a q
        //send back the response
        res.send('Hello World!');
    });
    app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
}
