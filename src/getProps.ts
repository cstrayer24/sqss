import parseProp from "./parseProp";

const getProps = (tokens: string[]) => {
  const propStringArr = tokens.slice(tokens.indexOf("SET") + 1, tokens.length);
  const props = propStringArr.join("").split(",");
  const propsArr = [];
  for (let i: number = 0; i < props.length; i++) {
    propsArr.push(parseProp(props[i]));
  }

  return propsArr;
};
export default getProps;
