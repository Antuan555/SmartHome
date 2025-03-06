import OffState from './states/OffState.js';
import LowBrightnessState from './states/LowBrightnessState.js';
import MediumBrightnessState from './states/MediumBrightnessState.js';
import HighBrightnessState from './states/HighBrightnessState.js';

class SmartLamp {
  constructor() {
    this.offState = new OffState(this);
    this.lowBrightnessState = new LowBrightnessState(this);
    this.mediumBrightnessState = new MediumBrightnessState(this);
    this.highBrightnessState = new HighBrightnessState(this);
    this.state = this.offState;
  }

  setState(state) {
    this.state = state;
  }

  toggle() {
    this.state.toggle();
  }

  increaseBrightness() {
    this.state.increaseBrightness();
  }
}

export default SmartLamp;
