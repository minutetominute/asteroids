var movingObject = function (obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
};

movingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;

}
