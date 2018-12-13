import GameModel from './model/index';
import GameController from './controllers/game-controller';
import IntroController from './controllers/intro-controller';
import GreetingController from './controllers/greeting-controller';
import RulesController from './controllers/rules-controller';
import StatsController from './controllers/stats-controller';
import ModalConfirmController from './controllers/modal-confirm-controller';
import ModalErrorController from './controllers/modal-error-controller';
import Loader from './data/loader';

export default class Router {

  static showIntro() {
    Loader.loadData()
      .then((data) => (this.games = data))
      .catch(this.showModalError);
    const intro = new IntroController();
    intro.changeView = () => this.showGreeting();
    intro.init();
  }

  static showGreeting() {
    const greeting = new GreetingController();
    greeting.changeView = () => this.showRules();
    greeting.init();
  }

  static showRules() {
    const rules = new RulesController();
    rules.showGreeting = () => this.showGreeting();
    rules.changeView = (player) => this.showGame(player);
    rules.init();
  }

  static showStats(results, player) {
    Loader.saveResults(results, player)
      .then(() => Loader.loadResults(player))
      .then((data) => {
        const stats = new StatsController(data);
        stats.showGreeting = () => this.showGreeting();
        stats.init();
      })
      .catch(this.showModalError);
  }

  static showGame(player) {
    const model = new GameModel(this.games, player);
    const game = new GameController(model);
    game.changeView = (results) => this.showStats(results, player);
    game.showModalConfirm = () => this.showModalConfirm();
    game.init();
  }

  static showModalConfirm() {
    const modal = new ModalConfirmController();
    modal.showGreeting = () => this.showGreeting();
    modal.init();
  }

  static showModalError(error) {
    const modal = new ModalErrorController(error);
    modal.init();
  }
}
