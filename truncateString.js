function truncateString(str, num) {
  // if str.length > num >> str + ...
  // else return str
  let result = "";
  if (str.length > num) {
    for (let i = 0; i < num; i++) {
      result += str[i];
    }
    console.log(result);
    return (result = `${result}...`);
  }

  if (str.length <= num) {
    for (let i = 0; i < str.length; i++) {
      result += str[i];
    }
    console.log(result);
    return result;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);
truncateString("A-", 1);
