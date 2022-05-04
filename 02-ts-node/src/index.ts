import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.savePokemonToDB(150);

charmander.publicApi = 'https://rootdev.es';
console.log(charmander);
