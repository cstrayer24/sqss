import lexar from "./lexar";
import getSelector from "./getSelector";
import getProps from "./getProps";
const transpileLine = (statment: string) => {
  const cssText = [];

  const tokens = lexar(statment.split(" "));

  const selector = getSelector(tokens);
  const props = getProps(tokens);
  cssText.push(selector);

  cssText.push("{");
  for (let i: number = 0; i < props.length; i++) {
    cssText.push(props[i]);
  }
  cssText.push("}");

  const cssString = cssText.join("");
  return cssString;
};

export default transpileLine;
