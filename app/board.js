function Board(){
  this._fleet = [];
}

Board.prototype = {
  ships: function(){
    return this._fleet;
  },
  place: function(ship){
    this._fleet.push(ship);
  }
};

module.exports = Board;
