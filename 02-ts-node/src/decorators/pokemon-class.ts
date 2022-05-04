function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) return printToConsole;
  else return () => {};
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log({ target, propertyKey, descriptor }, '<----------');

    // descriptor.value = () => console.log('hello world');
    const orginialMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 151) {
        throw new Error('Invalid initial Pokemons');
      } else {
        orginialMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, '<---GET');
        return 'anbreaker';
      },
      set(this, value) {
        // console.log(this, value, '<---SET');
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly(false)
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @CheckValidPokemId()
  savePokemonToDB(id: number) {
    console.log(`Saving pokemon ${id} to DB`);
  }
}
