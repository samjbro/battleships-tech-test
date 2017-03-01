function Board(rows,cols){
  this._fleet = [];
  this._cols = typeof cols !== 'undefined' ? cols : 10;
  this._rows = typeof rows !== 'undefined' ? rows : 10;
  this._locations = this.getLocations();
}

Board.prototype = {
  ships: function(){
    return this._fleet;
  },
  place: function(ship){
    if(!this.getLocations().includes(ship.location)){
      throw new Error('Ship must be placed on the ' + this._cols + 'x' + this._rows + ' board!');
    }
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
  getLocations: function(){
    var locs = []
    var alphArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').slice(0,this._cols);
    for(var col = 0; col<this._cols; col++){
      for(var row=1; row <= this._rows; row++){
        locs.push(alphArray[col]+(row));
      }
    }
    return locs;
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
