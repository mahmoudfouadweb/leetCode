function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints)
  const sum = classPoints.reduce((acc, current) => acc + current, 0);
  console.log(sum / classPoints.length < yourPoints);
  return sum / classPoints.length < yourPoints;
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
