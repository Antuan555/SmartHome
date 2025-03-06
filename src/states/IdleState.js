class IdleState {
  constructor(player) {
    this.player = player;
  }

  toggle() {
    console.log('Проигрыватель выключен');
    this.player.setState(this.player.offState);
  }

  playPause() {
    console.log('Музыка начинает играть');
    this.player.setState(this.player.playingState);
  }

  nextTrack() {
    console.log('Нет активного воспроизведения');
  }
}

export default IdleState;
