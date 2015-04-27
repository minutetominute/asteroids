(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (obj) {
    Asteroids.MovingObject.call(this, {
      pos: obj.pos,
      game: obj.game,
      vel: Asteroids.Util.randomVec(2),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR
    });
  }

  Asteroid.COLOR = "#29A320"
  Asteroid.RADIUS = 12;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
