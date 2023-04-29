import { useEffect } from "react";
import usePokemons from "../hooks/usePokemons";
import { useSearchParams } from "react-router-dom"
import ProgressBar from "../components/progress-bar"
import { useNavigate } from "react-router-dom";
import StatList from "../components/stat-list";
import AbilitiesList from "../components/abilities-list";

export default function PokemonDetail() {
  const { fetchPokemonInfo, currentPokemon } = usePokemons();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  }
  useEffect(() => {
    const name = searchParams.get("name");
    if (name)
      fetchPokemonInfo(name);
  }, [searchParams]);
  return (
    <div className="p-2">
      <a href="/" onClick={(e) => goBack(e)}>{`< Go back`}</a>
      <div className="flex flex-col items-center mb-4">
        <span className="text-2xl font-extrabold">Type</span>
        <span className="text-2xl">{currentPokemon.type}</span>
      </div>
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="text-2xl">Number: {currentPokemon.number}</div>
        <div className="text-2xl">Name: {currentPokemon.name}</div>
        <div className="text-2xl">Height: {currentPokemon.height}</div>
        <div className="text-2xl">Weight: {currentPokemon.weight}</div>
      </div>
      <div className="flex">
        <div className="w-1/2 mr-6">
          <span className="text-2xl font-extrabold">Stats</span>
          {currentPokemon?.stats && <StatList stats={currentPokemon.stats} />}
        </div>
        <div className="w-1/2 text-center">
          <span className="text-2xl font-extrabold">Abilities</span>
          {currentPokemon?.abilities && <AbilitiesList abilities={currentPokemon.abilities} />}
        </div>
      </div>
    </div>
  );
}