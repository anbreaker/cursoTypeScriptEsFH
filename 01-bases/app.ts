// Funciones Básicas
const add = (a: number, b: number): number => {
  return a + b;
};

const count = (heroes: string[]): number => {
  return heroes.length;
};

const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Green Lantern'];
count(superHeroes);

//Parametros por defecto
const callBatman = (call: boolean = true): void => {
  if (call) {
    console.log('BatSignal Activate!');
  }
};

callBatman(true);

// Rest?
const linkHeros = (...persons: string[]): string => {
  return persons.join(', ');
};

// Tipo funcion
const doNothing = (nmbr: number, text: string, bool: boolean, arr: string[]): void => {};

// Crear el tipo de funcion que acepte la funcion "doNothing"
let nothingEither: (nmbr: number, text: string, bool: boolean, arr: string[]) => void;
nothingEither = doNothing;
