import { useDispatch } from "react-redux";
import { setCurrentPokemon, setPokemonList } from "../store/features/pokemonSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function usePokemons() {
  const dispatch = useDispatch();
  const { pokemon: { pokemonList, currentPokemon } } = useSelector((state: RootState) => state);

  const fetchPokemonList = async () => {
    try {
      const { results } = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")).json();
      dispatch(setPokemonList(results));
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  }

  const fetchPokemonInfo = async (name: string) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const { sprites, stats, types, order, height, weight, abilities } = await (await fetch(url)).json();
      dispatch(setCurrentPokemon({
        imgUrl: sprites.front_default,
        type: types[0].type.name,
        name,
        number: order,
        height,
        weight,
        stats,
        abilities
      }));
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    };
  };

  return { fetchPokemonList, fetchPokemonInfo, pokemonList, currentPokemon };
}