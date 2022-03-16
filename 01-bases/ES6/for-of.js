"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const { name, weapon } of avengers) {
        console.log(`${name} - ${weapon}`);
    }
})();
//# sourceMappingURL=for-of.js.map