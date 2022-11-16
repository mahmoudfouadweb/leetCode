function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)
  return classPoints.reduce((acc, current) => acc + current, 0) / classPoints.length < yourPoints;
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
