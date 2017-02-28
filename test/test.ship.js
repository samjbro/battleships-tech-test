describe('Ship', function(){
  var ship;

  beforeEach(function(){
    ship = new Ship('C4');
  });

  it('knows its location', function(){
    expect(ship.location).to.equal('C4');
  });
});
