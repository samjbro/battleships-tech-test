var Board = require('./board');

function Player(board){
  this._board = typeof board !== 'undefined' ? board : new Board();
}

Player.prototype = {
  _create: function(ship, location){
    return new ship(location);
  },
  place: function(ship, location){
    var newShip = this._create(ship,location)
    this._board.place(newShip);
  }
};

module.exports = Player;