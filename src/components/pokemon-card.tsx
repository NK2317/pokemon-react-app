import { PokemonBasic } from "../store/features/pokemonSlice";
import { useNavigate } from "react-router-dom";
import usePokemons from "../hooks/usePokemons";
import PokeballSVG from "../assets/pokeball.svg"

export default function PokemonCard({ pokemon, key }: { pokemon: PokemonBasic, key: string }) {
  const navigate = useNavigate();
  const { fetchPokemonInfo } = usePokemons();
  return (
    <li
      key={key}
      className="flex flex-row justify-between w-full hover:cursor-pointer p-2 bg-white border border-gray-200 rounded-lg shadow m-2 hover:shadow-xl transition hover:scale-105"
      onDoubleClick={() => navigate(`/pokemon-detail?name=${pokemon.name}`)}
      onClick={() => fetchPokemonInfo(pokemon.name)}
    >
      <span>{pokemon.name}</span>
      <img width="24px" src={PokeballSVG} alt="pokeball logo" />
    </li>
  );
}
