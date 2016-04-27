'use strict';

function Mars(mx, my) {
  this.mx = mx
  this.my = my
}

Mars.prototype.toString = function() {
  return this.mx + 'x' + this.my
}

Mars.prototype.correct = function(pos) {
  if (pos.x < 0) {
    pos.x = 0
  }
  if (pos.y < 0) {
    pos.y = 0
  }
  if (pos.x > this.mx) {
    pos.x = this.mx
  }
  if (pos.y > this.my) {
    pos.y = this.my
  }
}

module.exports = Mars
