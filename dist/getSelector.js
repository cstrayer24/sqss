"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSelector = function (tokens) {
    var rawSelector = tokens[tokens.indexOf("UPDATE") + 1];
    return rawSelector.substring(1, rawSelector.length - 1);
};
exports.default = getSelector;
