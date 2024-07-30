#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transpileFile_1 = require("./transpileFile");
var fs_1 = require("fs");
function printErrStyle(errStr) {
    console.log("\u001B[1m\u001B[31m".concat(errStr));
}
printErrStyle("hi");
var args = process.argv.slice(2);
var filePath = args[0];
//test for a -o flag and set the output path to the command line argument directly adjacant to it otherwise default to style.css
var outputPath = args.indexOf("-o") > 0 ? args[args.indexOf("-o") + 1] : "style.css";
var fileContents = (0, transpileFile_1.default)(filePath);
(0, fs_1.writeFileSync)(outputPath, fileContents.join("\n"));
