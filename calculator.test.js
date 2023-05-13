import Calculator from "./calculator.js";
const calc = new Calculator();

describe("testing + ", () =>{
    test('test + function', () =>{
        expect(calc.add(3,4)).toBe(7);
    })

    test('testing + function', () =>{
        expect(calc.add(1,1)).toBe(2);
    })
});

describe("testing - ", () =>{
    test('test - function', () =>{
        expect(calc.subtract(22,2)).toBe(20);
    })
    test('testing - function', () =>{
        expect(calc.subtract(33,2)).toBe(31);
    })

});

describe("testing *", () =>{
    test('testing * function', () =>{
        expect(calc.multiply(3,3)).toBe(9);
    })
    test('testing * function', () =>{
        expect(calc.multiply(6,6)).toBe(36);
    })

});

describe("test /", () =>{
    test('testing / function', () =>{
        expect(calc.divide(40,4)).toBe(10);
    })
    test('testing / function', () =>{
        expect(calc.divide(9,3)).toBe(3);
    })
});