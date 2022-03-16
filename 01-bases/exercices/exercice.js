"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const exists = false;
    const pairHeroes = [batman, superman];
    const villain = ['Lex Lutor', 5, true];
    const partners = ['Wonder Woman', 'Aquaman', 'San', 'Flash'];
    let Powers;
    (function (Powers) {
        Powers[Powers["forceAquaman"] = 0] = "forceAquaman";
        Powers[Powers["forceBatman"] = 1] = "forceBatman";
        Powers[Powers["forceFlash"] = 5] = "forceFlash";
        Powers[Powers["forceSuperman"] = 100] = "forceSuperman";
    })(Powers || (Powers = {}));
    const forceFlash = Powers.forceAquaman;
    const forceSuperman = Powers.forceBatman;
    const forceBatman = Powers.forceFlash;
    const forceAquaman = Powers.forceSuperman;
    console.log(Powers);
    function activate_bat_signal() {
        return 'activated';
    }
    function ask_for_help() {
        console.log('Help!!!');
    }
    const power = '100';
    const outOfPower = power.length;
    console.log(outOfPower);
})();
//# sourceMappingURL=exercice.js.map