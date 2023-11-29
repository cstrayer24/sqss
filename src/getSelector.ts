const getSelector = (tokens: string[]) => {
  const rawSelector = tokens[tokens.indexOf("UPDATE") + 1];
  return rawSelector.substring(1, rawSelector.length - 1);
};

export default getSelector;
