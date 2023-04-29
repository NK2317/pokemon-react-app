import { PokemonBasic } from "../store/features/pokemonSlice";
import PokemonCard from "./pokemon-card";

type Props = {
  pokemonList: PokemonBasic[];
};

export default function PokemonList({ pokemonList }: Props) {
  return (
    <ol>
      {pokemonList.map((pokemon) => <PokemonCard key={`pokemon_basic_${pokemon.name}`} pokemon={pokemon} />)}
    </ol>
  );
}