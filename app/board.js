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
  isHit: function(location){
    var hitShip = this._getShipAt(location);
    var hitReport = hitShip ? 'Hit!' : 'Miss!';
    if(hitShip){
      hitShip.takeHit();
      if (hitShip.isSunk()) hitReport += " Your ship has sunk!";
    }
    return hitReport;
  },
  allSunk: function(){
    for(var ship=0; ship < this._fleet.length; ship++){
      if(!this._fleet[ship].isSunk()) return false;
    }
    return true;
  },
  _getOccupiedLocations: function(){
    var occupiedLocations = []
    for(var ship = 0; ship < this._fleet.length; ship++){
      occupiedLocations.push(this._fleet[ship].location);
    }
    return occupiedLocations;
  },
  _getShipAt: function(location){
    for (var ship = 0; ship < this._fleet.length; ship++){
      if (this._fleet[ship].location === location) return (this._fleet[ship])
    }
  }
};

module.exports = Board;
