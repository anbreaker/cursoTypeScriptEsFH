"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500,
    };
    const { nick, active } = avengers;
    console.log(nick.toLowerCase(), active);
    const printAvenger = ({ ironman, ...rest }) => {
        console.log(`\n${ironman}\n`, rest);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [, ironman] = avengersArr;
    console.log(ironman);
})();
//# sourceMappingURL=destructuring.js.map