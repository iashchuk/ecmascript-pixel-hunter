const mainElement = document.querySelector(`#main`);

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};


const render = (template) => {
  const wrapperElement = document.createElement(`div`);
  wrapperElement.innerHTML = template.trim();
  return wrapperElement;
};

const createScreen = (...elements) => {
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => {
    fragment.appendChild(element);
  });
  return fragment;
};

const getRandomElement = function (arrayElements) {
  let index = Math.floor(Math.random() * arrayElements.length);
  return arrayElements[index];
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export {changeScreen, render, createScreen, getRandomElement, getRandomInRange};
