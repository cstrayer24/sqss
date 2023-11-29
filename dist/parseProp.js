"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var changeQuotedText_1 = require("./changeQuotedText");
var parseProp = function (prop) {
    var propArr = prop.split("=");
    propArr[propArr.length - 1] = (0, changeQuotedText_1.default)(propArr[propArr.length - 1]);
    var propString = "".concat(propArr.join(":"), ";");
    return propString;
};
exports.default = parseProp;
