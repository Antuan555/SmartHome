class LowBrightnessState {
  constructor(lamp) {
    this.lamp = lamp;
  }

  toggle() {
    console.log('Лампа выключена');
    this.lamp.setState(this.lamp.offState);
  }

  increaseBrightness() {
    console.log('Яркость увеличена до средней');
    this.lamp.setState(this.lamp.mediumBrightnessState);
  }
}

export default LowBrightnessState;
