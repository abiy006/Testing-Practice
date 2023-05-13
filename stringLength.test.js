const stringlength = require('./stringLength.js');

describe("test strign length", () =>{           
    
    let result = stringlength("water");

    test("check the length of the string", ()=>{
        expect(result).toBe(5,'it is 5 characters long');        
        expect(stringlength("Abiy")).toBe(4);        
        expect(stringlength("Ab")).toBe(2);
        expect(stringlength("A")).toBe(1);   
    })

    test("stringLength throws an error if the string is less than 1 character long", () => {
        expect(() => stringlength("")).toThrow(
          "it has to be at least 1 character long"
        );
    })

    test("check if the string is less than 10 characters long", () => {
        expect(() => stringlength("Whatismystringcount")).toThrow(
          "it has to be less than 10 characters long"
        );
    })    
    
});