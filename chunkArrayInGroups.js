function chunkArrayInGroups(arr, size) {
  let twoDimensionArray = [];
  for (let i = 0; i < arr.length; i++) {
    twoDimensionArray.push(arr.splice(0, size));
    if (arr.length <= 3 && arr.length)
      twoDimensionArray.push(arr.splice(0, size));
    if (arr.length <= 1 && arr.length) twoDimensionArray.push(arr.splice(0, 1));
  }

  console.log("twoDimensionArray", twoDimensionArray);
  return twoDimensionArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
