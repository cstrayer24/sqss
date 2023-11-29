"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexar_1 = require("./lexar");
var getSelector_1 = require("./getSelector");
var getProps_1 = require("./getProps");
var transpileLine = function (statment) {
    var cssText = [];
    var tokens = (0, lexar_1.default)(statment.split(" "));
    var selector = (0, getSelector_1.default)(tokens);
    var props = (0, getProps_1.default)(tokens);
    cssText.push(selector);
    cssText.push("{");
    for (var i = 0; i < props.length; i++) {
        cssText.push(props[i]);
    }
    cssText.push("}");
    var cssString = cssText.join("");
    return cssString;
};
exports.default = transpileLine;
