(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var MovingObject = Asteroids.MovingObject = function (obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI,
        false
      );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos = this.game.wrap(
      [this.pos[0] += this.vel[0],
      this.pos[1] += this.vel[1]]
      );
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    if (Asteroids.Util.distance(this.pos, otherObject.pos) < this.radius + otherObject.radius) {
      return true;
    } else {
      return false;
    };
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    this.game.remove(otherObject);
  };

})();
