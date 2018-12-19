'use strict';

var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'game');
var PhaserGame = {};

PhaserGame.Boot = {
  init: function init() {
    this.input.maxPointers = 1;
  },
  create: function create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    game.input.keyboard.createCursorKeys();
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.startFullScreen();
    this.state.start('Preloader');
  }
};

game.state.add('Boot', PhaserGame.Boot);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9Cb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXRCLFVBQVUsQ0FBQyxJQUFJLEdBQUc7QUFDaEIsTUFBSSxFQUFBLGdCQUFHO0FBQUUsUUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUUsQ0FBQyxDQUFDO0dBQUU7QUFDckMsUUFBTSxFQUFBLGtCQUFHO0FBQ1AsUUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckQsUUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QyxRQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO0FBQy9ELFFBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsUUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDL0I7Q0FDRixDQUFDOztBQUVGLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiQm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoMTAyNCwgNzY4LCBQaGFzZXIuQ0FOVkFTLCAnZ2FtZScpO1xuY29uc3QgUGhhc2VyR2FtZSA9IHt9O1xuXG5QaGFzZXJHYW1lLkJvb3QgPSB7XG4gIGluaXQoKSB7IHRoaXMuaW5wdXQubWF4UG9pbnRlcnM9IDE7IH0sXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIGdhbWUuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuRVhBQ1RfRklUO1xuICAgIGdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnUHJlbG9hZGVyJyk7XG4gIH1cbn07XG5cbmdhbWUuc3RhdGUuYWRkKCdCb290JywgUGhhc2VyR2FtZS5Cb290KTsiXX0=