describe("FizzBuzz function", function() {
    
    beforeEach(function() {
        fizzNumb = new fizzBuzz();
    });

    describe("Check the number", function(){
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        })

        it("Should return Fizz if number divides by 3 (uses 9)", function() {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        })
    })
})