// Objetos
var batMovil = {
    carBody: 'Black',
    model: '6x6',
    bulletproof: true,
    passengers: 4
};
var bumbleBee = {
    carBody: 'Yellow with black',
    model: '4x2',
    bulletproof: true,
    passengers: 4,
    shoot: function () {
        // El metodo shoot es opcional
        console.log('shooting');
    }
};
var villains = [
    {
        name: 'Lex Luthor',
        age: 54,
        mutant: false
    },
    {
        name: 'Erik Magnus Lehnsherr',
        age: 49,
        mutant: true
    },
    {
        name: 'James Logan',
        age: undefined,
        mutant: true
    },
];
var charles = {
    power: 'psychic',
    height: 1.78
};
var apocalipsis = {
    leader: true,
    members: ['Magneto', 'Storm', 'Psylocke', 'Angel']
};
// Mystique, debe poder ser cualquiera de esos dos mutants (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
