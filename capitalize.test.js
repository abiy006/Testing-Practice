const capitalize = require('./capitalize.js');

describe("capitalize test", () => {
    test('capitalize test function', () =>{
        expect(capitalize("Abiy")).toBe("ABIY");
    })
});