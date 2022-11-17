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
  console.log(strArray.join(" "));
  return strArray.join(" ");
};

spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("Just kidding there is still one more")
