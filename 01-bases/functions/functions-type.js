"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The World is saved!`;
    let myFunction1;
    let myFunction2;
    let myFunction3;
    myFunction1 = addNumbers;
    console.log(myFunction1(1, 2));
    myFunction2 = greet;
    console.log(myFunction2('anbreaker'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
//# sourceMappingURL=functions-type.js.map