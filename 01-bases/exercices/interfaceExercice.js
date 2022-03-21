"use strict";
const driveBatmovil = (auto) => {
    auto.turnOn = true;
    auto.speedMaximum = 100;
    auto.accelerate();
};
const batmovil = {
    turnOn: false,
    speedMaximum: 0,
    accelerate() {
        console.log('...... gogogo!!!');
    },
};
const joker = {
    laugh: true,
    eat: true,
    cry: false,
};
const reir = (joker) => {
    if (joker.laugh) {
        console.log('JAJAJAJA');
    }
};
const gothanCity = (citizens) => {
    return citizens.length;
};
class Person {
}
//# sourceMappingURL=interfaceExercice.js.map