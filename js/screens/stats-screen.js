import StatsView from '../view/stats-view';
import {changeScreen} from '../services';
import {scoring} from '../logic/scoring';
import getModalConfirmScreen from './modal-screen';


export default (state) => {
  const stats = new StatsView(state, scoring(state.answers, state.lives));
  stats.backButtonHadler = () => changeScreen(getModalConfirmScreen());
  return stats.element;
};
