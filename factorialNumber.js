function factorialize(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  if (num > 0) return num * factorialize(num - 1);
  return num;
}

console.log(factorialize(10));
