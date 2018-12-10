import {INITIAL_STATE} from '../logic/config';


const countTime = (time) => {

  if (typeof time !== `number`) {
    throw new Error(`time should be of type number`);
  }

  if (time < 0) {
    throw new Error(`should not be negative value of time`);
  }

  if (time > INITIAL_STATE.time) {
    throw new Error(`should not be more than max time`);
  }

  const timer = {
    remainTime: time,
    tick() {
      const newTime = this.remainTime - 1;
      this.remainTime = newTime >= 0 ? newTime : 0;

      if (!this.remainTime && this.onTimeEnd) {
        this.onTimeEnd();
      }
    },
    onTimeEnd() {
      // console.log('Function onTimeEnd is calling');
    },
  };
  return timer;
};

export {countTime};
