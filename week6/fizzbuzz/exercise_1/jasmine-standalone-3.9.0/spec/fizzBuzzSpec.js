describe('FizzBuzz', function(){
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });
  let fizzbuzz;
  describe('knows when number is', function() {
    it("divisble by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it("says fizz", function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
  });
  describe('knows when number is not', function(){
    it("divisible by 3", function(){
      expect(fizzbuzz.isDivisibleByThree(5)).toBe(false);
    });
  });
  describe('knows when number is', function() {
    it("divisble by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it("says buzz", function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
  });
  describe('knows when number is not', function() {
    it("divisble by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);
    });
  });
  describe('knows when number is', function(){
    it("divisble by 5 and 3", function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
    it("divisble by 5 and 3", function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
  });
  describe('knows when number is not', function(){
    it("divisble by 5 and 3", function(){
      expect(fizzbuzz.isDivisibleByFifteen(7)).toBe(false);
    });
  }); 
});