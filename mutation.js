/**
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 */

function mutation(arr) {
arr.toLowerCase()
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[0].length; j++){
      if(arr[0][j] === arr[1][j]) console.log(true);
    }
  }
  return arr;
}

mutation(["hello", "hey"]);