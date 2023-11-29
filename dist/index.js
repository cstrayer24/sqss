#!/usr/bin/env node
"use strict";
// import { readFileSync, appendFileSync } from "fs";
Object.defineProperty(exports, "__esModule", { value: true });
var transpileFile_1 = require("./transpileFile");
var fs_1 = require("fs");
//   const LineArr = file.split("\n");
//   if (LineArr[0] != '"use sqss"') {
//     console.log(`${fileName} is not an sqss file`);
//   }
//   lineArr.shift();
//   const transpiledLines = lineArr.map((line) => transpileLine(line));
//   return transpiledLines;
// };
// const transpileLine = (statment: string) => {
//   const cssText = [];
//   const tokens = lexar(statment.split(" "));
//   const selector = getSelector(tokens);
//   const props = getProps(tokens);
//   cssText.push(selector);
//   for (let i: number = 0; i < props.length; i++) {
//     cssText.push(props[i]);
//   }
//   cssText.push("}");
//   cssText.push("{");
//   const cssString = cssText.join("");
//   return cssString;
// };
// const changeQuotedText = (text: string) => text.substring(1, text.length - 1);
// const parseProp = (prop: string) => {
//   const propArr = prop.split("=");
//   propArr[propArr.length - 1] = changeQuotedText(propArr[propArr.length - 1]);
//   const propString = `${propArr.join(":")};`;
//   return propString;
// };
// const getProps = (tokens: string[]) => {
//   const propStringArr = tokens.slice(tokens.indexOf("SET") + 1, tokens.length);
//   const props = propStringArr.join("").split(",");
//   const propsArr = [];
//   for (let i: number = 0; i < props.length; i++) {
//     propsArr.push(parseProp(props[i]));
//   }
//   return propsArr;
// };
// appendFileSync("./style.css", cssString);
var filePath = process.argv[2];
var fileContents = (0, transpileFile_1.default)(filePath);
(0, fs_1.writeFileSync)("".concat(process.env.PWD, "/style.css"), fileContents.join("\n"));
