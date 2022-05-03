import { getPokemons } from './generics/getPokemons';

getPokemons(4)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finally getPokemons'));
