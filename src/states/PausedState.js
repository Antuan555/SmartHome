class PausedState {
  constructor(player) {
    this.player = player;
  }

  toggle() {
    console.log('Проигрыватель выключен');
    this.player.setState(this.player.offState);
  }

  playPause() {
    console.log('Музыка продолжает играть');
    this.player.setState(this.player.playingState);
  }

  nextTrack() {
    console.log('Переключение на следующий трек и воспроизведение');
    this.player.setState(this.player.playingState);
  }
}

export default PausedState;
