"use strict";
(() => {
    const add = (a, b) => {
        return a + b;
    };
    const count = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ['Flash', 'Arrow', 'Superman', 'Green Lantern'];
    count(superHeroes);
    const callBatman = (call = true) => {
        if (call) {
            console.log('BatSignal Activate!');
        }
    };
    callBatman(true);
    const linkHeros = (...persons) => {
        return persons.join(', ');
    };
    const doNothing = (nmbr, text, bool, arr) => { };
    let nothingEither;
    nothingEither = doNothing;
})();
//# sourceMappingURL=app.js.map