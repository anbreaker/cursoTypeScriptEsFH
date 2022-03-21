"use strict";
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
//# sourceMappingURL=exerciceCustomTypes.js.map