describe('Board', function(){
  var board,
      ship;
  beforeEach(function(){
    board = new Board();
    ship = sinon.createStubInstance(Ship);
  });
  describe('setup', function(){
    it('has no ships initially', function(){
      expect(board.ships()).to.eql([]);
    });
    it('knows all its legal locations', function(){
      otherBoard = new Board(2,2);
      expect(otherBoard.getLocations()).to.eql(['A1','A2','B1','B2']);
    });
  });

  describe('#place', function(){
    it('can place a ship', function(){
      ship.location = 'C4';
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
    it('prevents a ship being placed outside the board', function(){
      ship.location = 'K1';
      expect(function(){ board.place(ship); }).to.throw('Ship must be placed on the 10x10 board!');
      ship.location = 'A11';
      expect(function(){ board.place(ship); }).to.throw('Ship must be placed on the 10x10 board!');
    });
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
      ship.location = 'C4';
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
