/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i]) newArray.push(arr[i]);
  }
  console.log(newArray);
  return arr;
}

// A second solution
function bouncer2(arr) {
  console.log(arr.filter(Boolean));
}

// bouncer([7, "ate", "", false, 9]);
// bouncer([false, null, 0, NaN, undefined, ""]);

bouncer2([7, "ate", "", false, 9]);
bouncer2([false, null, 0, NaN, undefined, ""]);
