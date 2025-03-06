class MediumBrightnessState {
  constructor(lamp) {
    this.lamp = lamp;
  }

  toggle() {
    console.log('Лампа выключена');
    this.lamp.setState(this.lamp.offState);
  }

  increaseBrightness() {
    console.log('Яркость увеличена до максимальной');
    this.lamp.setState(this.lamp.highBrightnessState);
  }
}

export default MediumBrightnessState;
