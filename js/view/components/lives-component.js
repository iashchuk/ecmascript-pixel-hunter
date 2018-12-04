export default (lives) => {
  return `
    <div class="game__lives">
        <img src="img/heart__${lives >= 1 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
        <img src="img/heart__${lives >= 2 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
        <img src="img/heart__${lives >= 3 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
    </div>`;
};
