'use strict';

let Coord = require('../src/coord');

describe('Coord', function () {

  it('should be default (0 0 N)', function () {
    var coord = new Coord();
    coord.x.should.equal(0);
    coord.y.should.equal(0);
    coord.d.should.equal('N');
    coord.toString().should.equal('0 0 N');
  });

  it('should parse (1 2 E) to coord', function () {
    var coord = new Coord('1 2 E');
    coord.x.should.equal(1);
    coord.y.should.equal(2);
    coord.d.should.equal('E');
    coord.toString().should.equal('1 2 E');
  });

});
