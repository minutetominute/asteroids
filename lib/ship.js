(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (obj) {
    Asteroids.MovingObject.call(this, {
      pos: obj.game.randomPosition(),
      game: obj.game,
      vel: [0, 0],
      radius: 5,
      color: "#000890"
    });
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {

    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };
})();
