const resize = (frame, given) => {
  const widthRatio = given.width / frame.width;
  const heightRatio = given.height / frame.height;
  const ratio = Math.max(widthRatio, heightRatio);

  return {
    width: Math.floor(given.width / ratio),
    height: Math.floor(given.height / ratio),
  };
};


const resizeImages = (content) => {
  content.querySelectorAll(`img`).forEach((img) => {
    img.addEventListener(`load`, () => {
      const frame = {
        width: img.parentElement.clientWidth,
        height: img.parentElement.clientHeight
      };
      const given = {
        width: img.naturalWidth,
        height: img.naturalHeight
      };
      const resizeImage = resize(frame, given);
      img.style.width = resizeImage.width + `px`;
      img.style.height = resizeImage.height + `px`;
    });
  });
};

export {resize, resizeImages};
