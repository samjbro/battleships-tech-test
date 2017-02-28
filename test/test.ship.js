describe('Ship', function(){
  var ship;

  beforeEach(function(){
    ship = new Ship('C4');
  });

  it('knows its location', function(){
    expect(ship.location).to.equal('C4');
  });
  it('knows its size', function(){
    expect(ship.size).to.equal(1);
  });
  describe('hits', function(){
    it('is not hit initially', function(){
      expect(ship.hits).to.equal(0);
    });
    it('records a hit', function(){
      ship.takeHit();
      expect(ship.hits).to.equal(1);
    });
  });

  describe('#isSunk', function(){
    it('is not sunk initially', function(){
      expect(ship.isSunk()).to.be.false;
    });
    it('knows if it is sunk', function(){
      ship.takeHit();
      expect(ship.isSunk()).to.be.true;
    });
  });
});
