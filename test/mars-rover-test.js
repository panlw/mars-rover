'use strict';

let Mars = require('../src/mars');
let Rover = require('../src/rover');

describe('MarsRover', function () {

  var mars, rover;

  before(function () {
    mars = new Mars(5, 5);
  });

  beforeEach(function () {
    rover = new Rover();
    rover.land(mars);
  });

  it('should create a rover at coord (0,0) and direction is N(North)', function () {
    rover.pos().should.eql('0 0 N');
  });
  it('should change direction to W(West) when accept command: L', function () {
    rover.run('L');
    rover.pos().should.eql('0 0 W');
  });
  it('should change direction to S(South) when accept command: LL', function () {
    rover.run('LL');
    rover.pos().should.eql('0 0 S');
  });
  it('should change direction to E(East) when accept command: LLL', function () {
    rover.run('LLL');
    rover.pos().should.eql('0 0 E');
  });
  it('should turn a circle and back when accept command: LLLL', function () {
    rover.run('LLLL');
    rover.pos().should.eql('0 0 N');
  });

  it('should change direction to E(East) when accept command: R', function () {
    rover.run('R');
    rover.pos().should.eql('0 0 E');
  });
  it('should change direction to S(South) when accept command: RR', function () {
    rover.run('RR');
    rover.pos().should.eql('0 0 S');
  });
  it('should change direction to W(West) when accept command: RRR', function () {
    rover.run('RRR');
    rover.pos().should.eql('0 0 W');
  });
  it('should turn a circle and back when accept command: RRRR', function () {
    rover.run('RRRR');
    rover.pos().should.eql('0 0 N');
  });

  it('should move forward one step when accept command: M', function () {
    rover.run('M');
    rover.pos().should.eql('0 1 N');
  });
  it('should move forward two steps when accept command: MM', function () {
    rover.run('MM');
    rover.pos().should.eql('0 2 N');
  });

  it('should change direction to W and move forward one step when accept command: LM', function () {
    rover.land(mars, '1 1 N');
    rover.run('LM');
    rover.pos().should.eql('0 1 W');
  });
  it('should change direction to W and move forward two steps when accept command: LMM', function () {
    rover.land(mars, '2 2 N');
    rover.run('LMM');
    rover.pos().should.eql('0 2 W');
  });

  it('should change direction to S and move forward one step when accept command: LLM', function () {
    rover.land(mars, '1 1 N');
    rover.run('LLM');
    rover.pos().should.eql('1 0 S');
  });
  it('should change direction to S and move forward two steps when accept command: LLMM', function () {
    rover.land(mars, '2 2 N');
    rover.run('LLMM');
    rover.pos().should.eql('2 0 S');
  });

  it('should change direction to E and move forward one step when accept command: RM', function () {
    rover.run('RM');
    rover.pos().should.eql('1 0 E');
  });
  it('should change direction to E and move forward two steps when accept command: RMM', function () {
    rover.run('RMM');
    rover.pos().should.eql('2 0 E');
  });

  it('should cannot forward when reach border already', function () {
    rover.land(mars, '0 5 N');
    rover.run('M');
    rover.pos().should.eql('0 5 N');
  });

});
