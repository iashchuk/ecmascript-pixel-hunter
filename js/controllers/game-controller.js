import Controller from './controller';
import HeaderView from '../views/header-view';
import GuessGameView from '../views/guess-game-view';
import ChooseGameView from '../views/choose-game-view';
import TinderGameView from '../views/tinder-game-view';
import FooterView from '../views/footer-view';
import createAnswer from '../logic/create-answer';
import scoring from '../logic/scoring';


const ONE_SECOND = 1000;

export default class GameController extends Controller {
  constructor(model) {
    super();
    this.model = model;
    this._timer = null;

    this.header = new HeaderView(this.model.state);
    this.content = this.game;
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }


  get game() {
    const question = this.model.nextGame();
    const typeOfGame = {
      'tinder-like': new TinderGameView(this.model.state, question),
      'two-of-two': new ChooseGameView(this.model.state, question),
      'one-of-three': new GuessGameView(this.model.state, question)
    };

    const game = typeOfGame[question.type];
    game.answerHandler = (result) => this.answerHandler(result);

    return game;
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.backButtonHandler = this.showModalConfirm;
  }

  updateContent() {
    const content = this.game;
    this.root.replaceChild(content.element, this.content.element);
    this.content = content;
  }

  updateGame() {
    this.model.updateTimer();
    this.updateHeader();
    this.updateContent();
    this.initTimer();
  }

  initTimer() {
    this._timer = setInterval(() => {
      this.model.tick();
      this.timeEndHandler();
      this.updateHeader();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  timeEndHandler() {
    if (!this.model.state.time) {
      this.answerHandler();
    }
  }

  changeLevel() {
    this.model.nextLevel();
    return this.model.isGameOver() ? this.changeView(this.getResults()) : this.updateGame();
  }

  getStats() {
    const {lives, answers} = this.model.state;
    const results = scoring(answers, lives);
    results.answers = answers;
    return results;
  }

  answerHandler(result) {
    this.stopTimer();
    const answer = createAnswer(result, this.model.state.time);
    this.model.changeLives(answer);
    this.model.state.answers.push(answer);
    this.changeLevel();
  }

  init() {
    this.render(this.root);
    this.initTimer();
  }

  changeView() {}
  showModalConfirm() {}
}
