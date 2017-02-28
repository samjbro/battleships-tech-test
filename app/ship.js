function Ship(location){
  this.location = location;
  this.hits = 0;
  this.size = 1;
}

Ship.prototype = {
  isSunk: function(){
    return this.hits >= this.size;
  },
  takeHit: function(){
    this.hits++;
  }
};

module.exports = Ship;
