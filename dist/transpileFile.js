"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var getFileName_1 = require("./getFileName");
var transpileLine_1 = require("./transpileLine");
var transpileFile = function (filePath) {
    var fileName = (0, getFileName_1.default)(filePath);
    var file = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    var LineArr = file.split("\n");
    if (LineArr[0] != '"use sqss"') {
        console.log("".concat(fileName, " is not an sqss file"));
    }
    LineArr.shift();
    var transpiledLines = LineArr.map(function (line) {
        if (line !== "") {
            return (0, transpileLine_1.default)(line);
        }
    });
    return transpiledLines;
};
exports.default = transpileFile;
