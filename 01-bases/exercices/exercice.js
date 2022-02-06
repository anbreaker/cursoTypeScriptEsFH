(function () {
    // Types
    var batman = 'Bruce';
    var superman = 'Clark';
    var exists = false;
    // Tuples
    var pairHeroes = [batman, superman];
    var villain = ['Lex Lutor', 5, true];
    // Arrays
    var partners = ['Wonder Woman', 'Aquaman', 'San', 'Flash'];
    // Enums
    var Powers;
    (function (Powers) {
        Powers[Powers["forceAquaman"] = 0] = "forceAquaman";
        Powers[Powers["forceBatman"] = 1] = "forceBatman";
        Powers[Powers["forceFlash"] = 5] = "forceFlash";
        Powers[Powers["forceSuperman"] = 100] = "forceSuperman";
    })(Powers || (Powers = {}));
    var forceFlash = Powers.forceAquaman;
    var forceSuperman = Powers.forceBatman;
    var forceBatman = Powers.forceFlash;
    var forceAquaman = Powers.forceSuperman;
    console.log(Powers);
    // Returns
    function activate_bat_signal() {
        return 'activated';
    }
    function ask_for_help() {
        console.log('Help!!!');
    }
    // Assertions of type
    var power = '100';
    var outOfPower = power.length;
    console.log(outOfPower);
})();
