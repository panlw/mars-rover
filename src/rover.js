'use strict';

var Coord = require('./coord.js')

var CMDS = {
  'L': {
    'N': function() {
      this.d = 'W';
    },
    'W': function() {
      this.d = 'S';
    },
    'S': function() {
      this.d = 'E';
    },
    'E': function() {
      this.d = 'N';
    }
  },
  R: {
    'N': function() {
      this.d = 'E';
    },
    'E': function() {
      this.d = 'S';
    },
    'S': function() {
      this.d = 'W';
    },
    'W': function() {
      this.d = 'N';
    }
  },
  'M': {
    'N': function() {
      this.y += 1;
    },
    'E': function() {
      this.x += 1;
    },
    'S': function() {
      this.y -= 1;
    },
    'W': function() {
      this.x -= 1;
    }
  }
}

function Rover() {}

Rover.prototype.land = function(mars, xyd) {
  this.mars = mars
  this._pos = new Coord(xyd)
}

Rover.prototype.pos = function() {
  return this._pos.toString()
}

Rover.prototype.run = function(commands) {
  var s = this._pos,
    m = this.mars
  for (var i = 0, n = commands.length; i < n; i++) {
    CMDS[commands[i]][s.d].apply(s)
    m.correct(s)
  }
}

module.exports = Rover
