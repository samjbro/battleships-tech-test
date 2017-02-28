describe('Board', function(){
  var board;

  beforeEach(function(){
    board = new Board();
  });
  it('has no ships initially', function(){
    expect(board.ships()).to.eql([]);
  });
  it('can place a ship', function(){
    var ship = sinon.createStubInstance(Ship);
    board.place(ship);
    expect(board.ships()).to.eql([ship]);
  });
});
