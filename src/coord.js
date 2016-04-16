'use strict';

const RE_XYD = /^(\d+) (\d+) ([NESW])$/;

function _parse(xyd) {
    var r = RE_XYD.exec(xyd);
    if (r) {
      return {
        x: parseInt(r[1], 10),
        y: parseInt(r[2], 10),
        d: r[3]
      };
    }
    else {
        return _def();
    }
}
function _def() {
    return {x: 0, y: 0, d: 'N'};
}

function Coord(xyd) {
  var pos = typeof xyd === 'string' ? _parse(xyd) : _def();
  this.x = pos.x;
  this.y = pos.y;
  this.d = pos.d;
}

Coord.prototype.toString = function () {
  return [this.x, this.y, this.d].join(' ');
};

module.exports = Coord;