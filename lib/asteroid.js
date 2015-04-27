var Asteroid = function (obj) {
  MovingObject.call(this, {
    pos: this.pos,
    vel: Asteroids.Util.randomVec(length),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR
  });
}

Asteroid.COLOR = "#29A320"
Asteroid.RADIUS = 25;

Asteroid.Utils.inherits(Asteroid, MovingObject)
