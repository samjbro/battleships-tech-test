describe('Features', function(){
  var player;
  var board;
  var ship;

  beforeEach(function(){
    board = new Board();
    player = new Player(board);
  });
  it('a player can place a ship at a location on a board', function(){
    player.place(Ship,'C4');
    expect(board.ships()[0]).to.be.an.instanceOf(Ship);
    expect(board.ships()[0].location).to.equal('C4');
  });
});
