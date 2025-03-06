import OffState from './states/OffStatePlayer.js';
import IdleState from './states/IdleState.js';
import PlayingState from './states/PlayingState.js';
import PausedState from './states/PausedState.js';

export default class MusicPlayer {
  constructor() {
    this.offState = new OffState(this);
    this.idleState = new IdleState(this);
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.state = this.offState;
  }

  setState(state) {
    this.state = state;
  }

  toggle() {
    this.state.toggle();
  }

  playPause() {
    this.state.playPause();
  }

  nextTrack() {
    this.state.nextTrack();
  }
}
