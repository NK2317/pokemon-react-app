import { useEffect, useState } from "react";
import PokemonList from "../components/pokemon-list";
import usePokemons from "../hooks/usePokemons";

export default function Home() {
  const { pokemonList, fetchPokemonList } = usePokemons();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const paginatedPokemonList = pokemonList.slice(indexOfFirstPost, indexOfLastPost);

  const next = () => setCurrentPage(currentPage + 1);
  const prev = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    fetchPokemonList();
  }, []);
  return (
    <div className="text-center">
      <PokemonList pokemonList={paginatedPokemonList} />
      <div>
        {(currentPage > 1) && <button className="p-2 m-2" onClick={() => prev()}>Prev</button>}
        <button className="p-2 m-2" onClick={() => next()}>Next</button>
      </div>
    </div>
  );
}