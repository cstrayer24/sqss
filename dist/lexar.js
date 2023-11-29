"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexar = function (tokens) { return tokens.map(function (token) { return token.trim(); }); };
exports.default = lexar;
