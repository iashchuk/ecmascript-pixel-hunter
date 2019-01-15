import resize from './resize';

export default (game) => {
  const images = [];
  game.params.forEach((param) => {
    const image = new Image();
    image.src = param.src;

    const frame = {
      width: param.width,
      height: param.height
    };

    const given = {
      width: image.naturalWidth,
      height: image.naturalHeight
    };

    const newSize = resize(frame, given);

    image.type = param.type;
    image.index = param.index;
    image.width = newSize.width;
    image.height = newSize.height;


    images.push(image);


  });

  return images;
};
