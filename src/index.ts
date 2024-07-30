#!/usr/bin/env node
import transpileFile from "./transpileFile";
import { writeFileSync } from "fs";
function printErrStyle(errStr: string) {
  console.log(`\x1b[1m\x1b[31m${errStr}`);
}
printErrStyle("hi");
const args = process.argv.slice(2);
const filePath = args[0];
//test for a -o flag and set the output path to the command line argument directly adjacant to it otherwise default to style.css
const outputPath =
  args.indexOf("-o") > 0 ? args[args.indexOf("-o") + 1] : "style.css";

const fileContents = transpileFile(filePath);
writeFileSync(outputPath, fileContents.join("\n"));
