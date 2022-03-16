"use strict";
(() => {
    class Mutant {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return 'Save the world!';
        }
    }
    class Villain extends Mutant {
        conquerTheWorld() {
            return 'Conquer the world!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    console.log(wolverine.saveTheWorld());
    console.log(magneto.conquerTheWorld());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
    printName(magneto);
})();
//# sourceMappingURL=abstract.js.map