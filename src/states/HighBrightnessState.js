class HighBrightnessState {
  constructor(lamp) {
    this.lamp = lamp;
  }

  toggle() {
    console.log('Лампа выключена');
    this.lamp.setState(this.lamp.offState);
  }

  increaseBrightness() {
    console.log('Яркость уже максимальная');
  }
}

export default HighBrightnessState;
