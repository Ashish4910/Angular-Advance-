"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.small = function () {
        console.log("hiii");
        var d = new demo_1.Demo();
    };
    return myClass;
}());
