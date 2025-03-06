class PlayingState {
  constructor(player) {
    this.player = player;
  }

  toggle() {
    console.log('Проигрыватель выключен');
    this.player.setState(this.player.offState);
  }

  playPause() {
    console.log('Музыка на паузе');
    this.player.setState(this.player.pausedState);
  }

  nextTrack() {
    console.log('Переключение на следующий трек');
  }
}

export default PlayingState;
