// Funciones Básicas
function add(a, b) {
  return a + b;
}

const count = (heroes) => {
  return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Green Lantern'];
count(superHeroes);

//Parametros por defecto
const callBatman = (call) => {
  if (call) {
    console.log('Batiseñal activada');
  }
};

callBatman();

// Rest?
const linkHeros = (persons) => {
  return persons.join(', ');
};

// Tipo funcion
const doNothing = (nmbr, text, bool, arr) => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let nothingEither;
nothingEither = doNothing;
