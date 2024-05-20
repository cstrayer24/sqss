import { readFileSync } from "fs";
import getFileName from "./getFileName";
import transpileLine from "./transpileLine";
const transpileFile = (filePath: string) => {
  const fileName = getFileName(filePath);
  const file = readFileSync(filePath, { encoding: "utf-8" });

  const LineArr = file.split("\n");
  if (LineArr[0] != '"use sqss"') {
    console.log(`${fileName} is not an sqss file`);
  }
  LineArr.shift();

  const transpiledLines = LineArr.map((line) => {
    if (line !== "") {
      return transpileLine(line);
    }
  });
  return transpiledLines;
};
export default transpileFile;
