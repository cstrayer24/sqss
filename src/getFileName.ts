const getFileName = (filePath: string) => {
  const filenameArr = filePath.split("/");

  return filenameArr[filenameArr.length - 1];
};
export default getFileName;
