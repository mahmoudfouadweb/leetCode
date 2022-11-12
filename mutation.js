/**
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 */

function mutation(arr) {
  const test = arr[0].toLowerCase();
  const target = arr[1].toLowerCase();
  let count = 0;
  for (let i = 0; i < test.length; i++) {
    // console.log("i", test[i], target[i]);
    for (let j = 0; j < test.length; j++) {
      if (target[i] === test[j] && target[i]) {
        console.log(target[i]);
        count++;
      }
    }
  }
  console.log(count);
  if (count === target.length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

mutation(["hello", "hey"]);
mutation(["Mary", "Army"]);
mutation(["hello", "Hello"]);
