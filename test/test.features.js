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
  describe('when taking fire', function(){
    beforeEach(function(){
      player.place(Ship,'C4');
    });
    it('reports a hit if a ship is at the specified location', function(){
      expect(player.takeFire('C4')).to.equal('Hit!');
    });
    it('reports a miss if a ship is not at the specified location', function(){
      expect(player.takeFire('C5')).to.equal('Miss!');
    });
  });
});
