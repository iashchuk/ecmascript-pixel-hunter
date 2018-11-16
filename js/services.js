const mainElement = document.querySelector(`#main`);


const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};


const getElementFromTemplate = (template) => {
  const wrapperElement = document.createElement(`div`);
  wrapperElement.innerHTML = template.trim();
  return wrapperElement;
};


export {changeScreen, getElementFromTemplate};
