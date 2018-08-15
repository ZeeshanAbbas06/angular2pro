"use strict";
var protractor_1 = require('protractor');
describe("Going to start first test.", function () {
    it("it should pass with no problem", function () {
        protractor_1.browser.get('http://localhost:8808/');
        //let a = 12;
        //expect(a).toBe(12);
    });
    // it("It should not pass as it is undefined", () =>{
    //     let z;
    //     expect(z).toBeDefined("not defined");
    // });
});
//# sourceMappingURL=FirstTestspec.js.map