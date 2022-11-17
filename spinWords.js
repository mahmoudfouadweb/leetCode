const spinWords = (str) => {
  const strArray = str.split(" ");
  let temp = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= 5) {
      for (let j = strArray[i].length - 1; j >= 0; j--) {
        temp += strArray[i][j];
      }
    } else temp = strArray[i];
    strArray[i] = temp;
    temp = "";
  }
  // console.log("strArray>>>", strArray);
  // console.log(strArray.join(" "));
  return strArray.join(" ");
};

const spinWords2 = (str) => {
  let temp = "";
  return str
    .split(" ")
    .map((string) => {
      if (string.length >= 5) {
        for (let j = string.length - 1; j >= 0; j--) {
          temp += string[j];
        }
        string = temp;
        temp = "";
        return string;
      } else return string;
    })
    .join(" ");
};

spinWords2("Welcome");

spinWords2("Hey fellow warriors");
spinWords2("This is a test");
spinWords2("Just kidding there is still one more");
