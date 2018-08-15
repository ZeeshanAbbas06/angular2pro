import {browser} from 'protractor';

import {By} from 'protractor';
describe( "Going to start first test.", () => {

    it("it should pass with no problem", () => {

        browser.get('http://localhost:8808/');
        browser.get("xuz");
        

        //let a = 12;

        //expect(a).toBe(12);

    })

    // it("It should not pass as it is undefined", () =>{

    //     let z;

    //     expect(z).toBeDefined("not defined");
    // });

});