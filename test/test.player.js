describe('Player', function(){
  var board,
      player,
      shipConstructor = sinon.stub(Ship.prototype, "constructor");
  beforeEach(function(){
    board = sinon.createStubInstance(Board);
    player = new Player(board);
    ship = sinon.createStubInstance(Ship);
    shipConstructor.returns(ship);
  });

  it('can place a new ship on its board', function(){
    player.place(shipConstructor, 'C4');
    expect(shipConstructor).to.have.been.calledWith('C4');
    expect(board.place).to.have.been.calledWith(ship);
  });
});
