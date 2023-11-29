"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseProp_1 = require("./parseProp");
var getProps = function (tokens) {
    var propStringArr = tokens.slice(tokens.indexOf("SET") + 1, tokens.length);
    var props = propStringArr.join("").split(",");
    var propsArr = [];
    for (var i = 0; i < props.length; i++) {
        propsArr.push((0, parseProp_1.default)(props[i]));
    }
    return propsArr;
};
exports.default = getProps;
