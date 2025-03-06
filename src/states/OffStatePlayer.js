class OffState {
  constructor(player) {
    this.player = player;
  }

  toggle() {
    console.log('Проигрыватель включен (ожидание)');
    this.player.setState(this.player.idleState);
  }

  playPause() {
    console.log('Проигрыватель выключен. Включите его сначала.');
  }

  nextTrack() {
    console.log('Проигрыватель выключен. Включите его сначала.');
  }
}

export default OffState;
