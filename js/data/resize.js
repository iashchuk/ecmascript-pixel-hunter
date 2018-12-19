export default (frame, given) => {
  const widthRatio = given.width / frame.width;
  const heightRatio = given.height / frame.height;
  const ratio = Math.max(widthRatio, heightRatio);

  return {
    width: Math.floor(given.width / ratio),
    height: Math.floor(given.height / ratio),
  };
};
