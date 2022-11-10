function largestOfFour(arr) {
  // loop over sub arrays
  let curSum;
  let array;
  for (let i = 1; i < arr.length; i++) {
    curSum = arr[0]?.reduce((acc, num) => acc + num, 0);
    if (arr[i].length && arr[i]?.reduce((acc, num) => acc + num, 0) > curSum) {
      curSum = arr[i];
      array = arr[i];
    }
  }
  console.log(array);
  return array;

  // return largest sub array
}

largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
