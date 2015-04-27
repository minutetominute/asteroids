Asteroids.Util.inherits = function (ChildClass, ParentClass) {
  var Surrogate = function () {};
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
};

Asteroids.Util.randomVec = function (length) {
  var randX = Math.random() * (2 * length) - length;
  var randY = Math.sqrt(length*length - randX*randX);
  if (Math.random() > 0.5) {
   randY = -randY;
  }
  return [randX, randY];
};
