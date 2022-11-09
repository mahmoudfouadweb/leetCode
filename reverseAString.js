function reverseString(str) {
  const strArray = str.split("");
  let result = "";
  for (i = strArray.length - 1; i >= 0; i--) {
    result += strArray[i];
  }

  return result;
}

reverseString("hello");
