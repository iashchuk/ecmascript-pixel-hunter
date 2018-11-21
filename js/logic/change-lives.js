const changeLives = (game, answer) => {
  const result = (answer) ? 0 : 1;
  const lives = game.lives - result;
  return Object.assign({}, game, {lives});
};

export {changeLives};
