function makeNegative(num) {
  return num ? -num : num;
}

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
