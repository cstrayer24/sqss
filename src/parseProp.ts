import changeQuotedText from "./changeQuotedText";

const parseProp = (prop: string) => {
  const propArr = prop.split("=");
  propArr[propArr.length - 1] = changeQuotedText(propArr[propArr.length - 1]);
  const propString = `${propArr.join(":")};`;
  return propString;
};
export default parseProp;
