function largestOfFour(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (largest < arr[i][j]) largest = arr[i][j];
    }
    array.push(largest);
  }
  console.log(array);
  return array;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]);
