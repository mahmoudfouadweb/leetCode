function findLongestWordLength(str) {
  let longest = 0;
  str.split(" ").forEach((s) => {
    if (s.length > longest) longest = s.length;
  });

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

