"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var other = /** @class */ (function () {
    function other() {
    }
    other.prototype.otherMethod = function () {
        console.log("other mothod");
        var d = new demo_1.Demo();
        d.greet();
    };
    return other;
}());
var o = new other();
o.otherMethod();
