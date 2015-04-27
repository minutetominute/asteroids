var Game = function () {
  this.asteroids = [];
  this.addAsteroids;
}

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 40;

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(randomPosition()))
  }
}

Game.prototype.randomPosition = function () {
  return {pos: [Math.Random() * Game.DIM_Y, Math.Random() * Game.DIM_X]};
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function () {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
}
