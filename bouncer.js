/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] != false) newArray.push(arr[i]);
  }
  console.log(newArray);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
