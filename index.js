import SmartLamp from './src/SmartLamp.js';
import SmartPlayer from './src/SmartPlayer.js';

class SmartHome {
  constructor() {
    this.lamp = new SmartLamp();
    this.player = new SmartPlayer();
  }

  toggleLamp() {
    this.lamp.toggle();
  }

  increaseLampBrightness() {
    this.lamp.increaseBrightness();
  }

  togglePlayer() {
    this.player.toggle();
  }

  playPausePlayer() {
    this.player.playPause();
  }

  nextTrackPlayer() {
    this.player.nextTrack();
  }
}

// Демонстрация работы
const home = new SmartHome();
// Лампа
home.toggleLamp();
home.increaseLampBrightness();
home.increaseLampBrightness();
home.increaseLampBrightness();
home.toggleLamp();
home.increaseLampBrightness();
// Проигрыватель
home.togglePlayer();
home.playPausePlayer();
home.nextTrackPlayer();
home.playPausePlayer();
home.nextTrackPlayer();
home.togglePlayer();
home.nextTrackPlayer();
home.playPausePlayer();
