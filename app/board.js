function Board(){
  this._fleet = [];
}

Board.prototype = {
  ships: function(){
    return this._fleet;
  },
  place: function(ship){
    if(this._getOccupiedLocations().includes(ship.location)){
      throw new Error('Location already occupied!');
    }
    this._fleet.push(ship);
  },
  _getOccupiedLocations: function(){
    var occupiedLocations = []
    for(var ship = 0; ship < this._fleet.length; ship++){
      occupiedLocations.push(this._fleet[ship].location);
    }
    return occupiedLocations;
  }
};

module.exports = Board;
