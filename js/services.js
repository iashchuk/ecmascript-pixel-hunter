const getRandomElement = function (arrayElements) {
  let index = Math.floor(Math.random() * arrayElements.length);
  return arrayElements[index];
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export {getRandomElement, getRandomInRange};
