const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">`;
};

export default (lives) => {
  return `
    <div class="game__lives">
        ${drawHeart(lives >= 1)}
        ${drawHeart(lives >= 2)}
        ${drawHeart(lives >= 3)}
    </div>`;
};
