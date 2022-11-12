/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  // sort the first argument
  const sortedArray = arr.slice();
  let location = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] > sortedArray[j]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  // get the location of the second argument
  for (let i = 0; i < sortedArray.length; i++) {
    if (num > sortedArray[i] && num < sortedArray[i + 1]) location = i + 1;
    else if (num >= sortedArray[i] && num < sortedArray[i + 1]) location = i;
    else if (num === sortedArray[0] || !sortedArray.length) return location;
    else if (num > sortedArray[i] && num > sortedArray[sortedArray.length - 1])
      location = sortedArray.length;
  }
  console.log(sortedArray);
  console.log(location);
  return location;
}

getIndexToIns([70, 40, 60, 1.5, 10, 5, 1], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
