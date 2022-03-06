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
const sms = 'Hello World';
const hero = {
    name: 'Ironman',
    age: 45,
};
console.log(sms);
hero.age = 23;
console.log(hero.name + 1);
const a = 10;
let b = 10;
let c;
const msg = 'Hello!';
const sayHello = (msg) => {
    console.log(msg);
};
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
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    const name2 = fullName('Tony', '', true);
    console.log({ name });
    console.log({ name2 });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
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
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'BatSignal!!';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel'],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super speed'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
(() => {
    const batMovil = {
        carBody: 'Black',
        model: '6x6',
        bulletproof: true,
        passengers: 4,
    };
    const bumbleBee = {
        carBody: 'Yellow with black',
        model: '4x2',
        bulletproof: true,
        passengers: 4,
        shoot() {
            console.log('shooting');
        },
    };
    const villains = [
        {
            name: 'Lex Luthor',
            age: 54,
            mutant: false,
        },
        {
            name: 'Erik Magnus Lehnsherr',
            age: 49,
            mutant: true,
        },
        {
            name: 'James Logan',
            age: undefined,
            mutant: true,
        },
    ];
    const charles = {
        power: 'psychic',
        height: 1.78,
    };
    const apocalipsis = {
        leader: true,
        members: ['Magneto', 'Storm', 'Psylocke', 'Angel'],
    };
    console.log(apocalipsis);
    console.log(charles);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super force'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
(() => {
    let myCustomVariable = 'anbreaker';
    myCustomVariable = 23;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        age: 36,
        name: 'anbreaker',
        powers: ['code'],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.232654;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(1));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    const villians = ['Venon', 'Dr Octopus'];
    villians.forEach((v) => console.log(v.toUpperCase()));
    numbers.forEach((v) => console.log(v));
})();
(() => {
    let isSuperMan = true;
    let isBatman = false;
    isSuperMan = isBatman ? true : false;
    console.log(isBatman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currentAudio);
    let AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["medium"] = 2] = "medium";
        AudioLevel2[AudioLevel2["max"] = 10] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    let currentAudio2 = AudioLevel2.medium;
    console.log(AudioLevel2);
    console.log(currentAudio2);
})();
(() => {
    const error = (message) => {
        if (false)
            throw new Error(message);
        return true;
    };
    error('Sos');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians)
        console.log('Problems!');
    else
        console.log('Save!');
    avengers = Number('123a');
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    const batman = 'Batman';
    const greenLantern = 'Green Lantern';
    const blackLightning = `Hero: Black Lightning`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(blackLightning[21]?.toLocaleUpperCase() || 'No is here!');
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[1] = 3;
    hero[0] = 'Ironman';
    console.log(hero);
    const heroPowah = ['Spiderman', 100, false];
    heroPowah[2] = true;
    console.log(heroPowah);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSpiderman = () => {
        return;
    };
    const a = callBatman();
    console.log(callSpiderman());
    console.log(a);
})();
//# sourceMappingURL=main.js.map