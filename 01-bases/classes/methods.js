"use strict";
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (Team - ${this.team})`;
        }
    }
    const antman = new Avenger('Antman', 'Captain', 'Scott Lang');
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=methods.js.map