// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  turnOn: boolean;
  speedMaximum: number;
  accelerate: () => void;
}

const driveBatmovil = (auto: Auto): void => {
  auto.turnOn = true;
  auto.speedMaximum = 100;
  auto.accelerate();
};

const batmovil: Auto = {
  turnOn: false,
  speedMaximum: 0,
  accelerate() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  laugh?: boolean;
  eat?: boolean;
  cry?: boolean;
}

const joker: Joker = {
  laugh: true,
  eat: true,
  cry: false,
};

const reir = (joker: Joker): void => {
  if (joker.laugh) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion
interface gothanCityFn {
  (citizens: string[]): number;
}

const gothanCity: gothanCityFn = (citizens: string[]): number => {
  return citizens.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - name
    - age
    - gender
    - civilStatus
    - printBio(): void // in console a brief description.
*/

interface InPerson {
  name: string;
  age: number;
  gender: string;
  civilStatus: string;
  printBio: () => void;
}

class Person implements InPerson {
  name: string;
  age: number;
  gender: string;
  civilStatus: string;
  printBio: () => void;
}
