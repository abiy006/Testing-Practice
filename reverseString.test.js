const reverseString = require('./reverseString.js');

describe("check if the string is reversed or not", () =>{
    
    let result = reverseString("water"); 

    test('is it reversing?', () =>{
        expect(result).toBe("retaw");
    })

})