function confirmEnding(str, target) {
  const targetLength = target.length;
  let result = "";
  for (let i = str.length - targetLength; i < str.length; i++) result += str[i];
  if (result === target) return true;
  if (result !== target) return false;
}

// confirmEnding("Bastian", "n");
// confirmEnding("Open sesame", "same");
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "same"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
