"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFileName = function (filePath) {
    var filenameArr = filePath.split("/");
    return filenameArr[filenameArr.length - 1];
};
exports.default = getFileName;
