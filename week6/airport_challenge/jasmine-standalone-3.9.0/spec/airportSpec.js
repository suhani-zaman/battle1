describe('Airport', function(){
  let airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it("checks the plane has landed", function() {
      expect(airport.checklanding).toBeDefined();
    });
  });