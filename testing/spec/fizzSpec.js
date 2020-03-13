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

        it("Should return Buzz if number divides by 5 (uses 10)", function() {
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        })

        it("Should return FizzBuzz if number divides by 3 and 5 (uses 15)", function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        })

        it("Should return just the number (uses 4)", function() {
            var result = fizzBuzz(4);
            expect(result).toBe(4);
        })

        it("Should return that's not a number for a string", function() {
            var result = fizzBuzz("FizzyBuzzy");
            expect(result).toBe("That is not a number!");
        })
    })
})