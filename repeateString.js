/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);
  // if empty num not positive
  if (!num) return "";
  return result;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
