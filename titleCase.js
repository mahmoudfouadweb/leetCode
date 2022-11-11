/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  const sentences = str.split(" ");
  let result = "";
  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      result += `${sentences[i][0].toUpperCase()}${sentences[i][j]
        .toLowerCase().split('')} `;
    }
    // sentences[i];
    // console.log("sentences[i] >>", sentences[i]);
  }

  console.log(result);

  return result;
}

titleCase("I'm a little tea pot");
