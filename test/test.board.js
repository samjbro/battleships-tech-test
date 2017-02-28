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
});
