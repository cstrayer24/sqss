#!/usr/bin/env node
// import { readFileSync, appendFileSync } from "fs";

// import getFileName from "./getFileName";
// import transpileLine from "./transpileLine";
// const file = readFileSync("./style.sql", { encoding: "utf-8" });
// const lineArr = file.split("\n");
// if (lineArr[0] != '"use sqss"') {
//   console.log("not a sqss file");
// }
// const statment = lineArr[1];
// const transpileFile = (filePath: string) => {
//   const fileName = getFileName(filePath);
//   const file = readFileSync(filePath, { encoding: "utf-8" });

import { argv } from "process";
import transpileFile from "./transpileFile";
import { writeFileSync } from "fs";
import path = require("path");

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

const filePath = process.argv[2];
const fileContents = transpileFile(filePath);
writeFileSync(`${process.env.PWD}/style.css`, fileContents.join("\n"));
