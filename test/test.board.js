describe('Board', function(){
  var board,
      ship;
  beforeEach(function(){
    board = new Board();
    ship = sinon.createStubInstance(Ship);
  });
  it('has no ships initially', function(){
    expect(board.ships()).to.eql([]);
  });
  it('has a size', function(){
    expect(board.size()).to.equal("10 by 10");
  });
  it('can place a ship', function(){
    board.place(ship);
    expect(board.ships()).to.eql([ship]);
  });
  it('prevents a ship being placed at an occupied location', function(){
    ship.location = 'C4';
    board.place(ship);
    var otherShip = sinon.createStubInstance(Ship);
    otherShip.location = 'C4';
    expect(function(){ board.place(otherShip); }).to.throw('Location already occupied!');
  });
  describe('when taking fire', function(){
    beforeEach(function(){
      ship.location = 'C4';
      board.place(ship);
    });
    it('is hit if board has a ship at the location', function(){
      ship.isSunk.returns(false);
      expect(board.isHit('C4')).to.equal('Hit!');
      expect(ship.takeHit).to.have.been.called;
    });
    it('is not hit if board has no ship at the location', function(){
      expect(board.isHit('C5')).to.equal('Miss!');
      expect(ship.takeHit).not.to.have.been.called;
    });
  });
  describe('#allSunk', function(){
    beforeEach(function(){
      board.place(ship);
    });
    it('is false if any ships have not been sunk', function(){
      ship.isSunk.returns(false);
      expect(board.allSunk()).to.be.false;
    });
    it('is true if all ships have been sunk', function(){
      ship.isSunk.returns(true);
      expect(board.allSunk()).to.be.true;
    });
  });
});
