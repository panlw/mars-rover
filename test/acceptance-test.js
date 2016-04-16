'use strict';

let Mars = require('../src/mars');
let Rover = require('../src/rover');

describe('Acceptance Test', function () {

  var mars, rover;

  before(function () {
    mars = new Mars(5, 5);
  });

  beforeEach(function () {
    rover = new Rover();
  });

  it('land at (1 2 N), then run (LMLMLMLMM), will be at (1 3 N)', function () {
    rover.land(mars, '1 2 N');
    rover.run('LMLMLMLMM');
    rover.pos().should.eql('1 3 N');
  });

  it('land at (3 3 E), then run (MMRMMRMRRM), will be at (5 1 E)', function () {
    rover.land(mars, '3 3 E');
    rover.run('MMRMMRMRRM');
    rover.pos().should.eql('5 1 E');
  });

});
