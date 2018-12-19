import GameModel from './model/index';
import GameController from './controllers/game-controller';
import IntroController from './controllers/intro-controller';
import GreetingController from './controllers/greeting-controller';
import RulesController from './controllers/rules-controller';
import StatsController from './controllers/stats-controller';
import ModalConfirmController from './controllers/modal-confirm-controller';
import ModalErrorController from './controllers/modal-error-controller';
import Loader from './data/loader';


const ANIMATION_TIME = 1500;


export default class Router {

  static async showIntro() {
    const intro = new IntroController();
    intro.changeView = () => this.showRules();
    intro.init();
    try {
      this.games = await Loader.loadData();
      this.images = await Loader.loadImages(this.games);
      setTimeout(() => intro.animate(), ANIMATION_TIME);
    } catch (error) {
      this.showModalError(error);
    }
  }


  static showGreeting() {
    const greeting = new GreetingController();
    greeting.changeView = () => this.showRules();
    greeting.init();
    greeting.animate();
  }

  static showRules() {
    const rules = new RulesController();
    rules.showGreeting = () => this.showGreeting();
    rules.changeView = (player) => this.showGame(player);
    rules.init();
  }

  static async showStats(results, player) {
    try {
      await Loader.saveResults(results, player);
      const data = await Loader.loadResults(player);
      const stats = new StatsController(data);
      stats.showGreeting = () => this.showGreeting();
      stats.init();
    } catch (error) {
      this.showModalError(error);
    }
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
