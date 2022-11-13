function makeNegative(num) {
  if (num > 0) return -num;
  if (num < 0 || num === 0) return num;
}

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
