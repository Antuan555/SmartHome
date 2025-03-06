class OffState {
  constructor(lamp) {
    this.lamp = lamp;
  }

  toggle() {
    console.log('Лампа включена');
    this.lamp.setState(this.lamp.lowBrightnessState);
  }

  increaseBrightness() {
    console.log('Лампа выключена, сначала включите её.');
  }
}

export default OffState;
