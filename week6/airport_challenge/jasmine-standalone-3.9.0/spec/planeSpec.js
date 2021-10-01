describe ("Plane", function(){
    let plane;
    beforeEach(function(){
      plane = new Plane();
    });
    it("checks the method/function checkLanding is defined", function(){
      expect(plane.checkLanding).toBeDefined();
    });
    it("checks that color of plane is red", function(){
      number = plane.planeNumber();
      expect(plane.color(number)).toEqual('red');
    });
    it("checks that color of plane is green", function(){
      spyOn(plane, 'planeNumber').and.returnValue(1);
      number = plane.planeNumber;
      expect(plane.color(number)).toEqual('green');
    });
    it("checks that color of plane is green", function(){
      spyOn(plane, 'planeNumber').and.callFake(function(){ return 1; });
      number = plane.planeNumber();
      expect(plane.color(number)).toEqual('green');
    });
    it("checks that color of plane is planeHeight", function(){
      plane.planeHeight = jasmine.createSpy().and.returnValue(2)
      number = plane.planeHeight();
      expect(plane.color(number)).toEqual('red');
    });
    it("checks that color of plane is planeHeight", function(){
      planeHeight = jasmine.createSpy().and.returnValue(2)
      number = planeHeight();
      expect(plane.color(number)).toEqual('red');
    });
    it("checks that color of plane is planeHeight", function(){
      planeHeight = 2
      number = planeHeight;
      expect(plane.color(number)).toEqual('red');
    });
    // it("checks that throw error works", function(){
    //   expect(plane.shouldThrowError).toThrow('leave me alone');
    // });
  });
  // let(:plane){ double :plane, number: 10, color: "green", check_landing: true}
  // allow(plane).to receive(checklanding).with(even).and_return("green")