import usePokemons from "../hooks/usePokemons";

export default function MainLayout({ children }: { children: React.ReactElement }) {
  const { currentPokemon } = usePokemons();
  return (
    <div className="p-12">
      <div className="flex">
        <div className="w-1/3">
          <div className="flex flex-col items-center mb-[350px] mt-2 mr-2">
            <img src="/src/assets/pokeapi.png" />
          </div>
          <div className="flex flex-col items-center">
            {(currentPokemon?.imgUrl) && <img width="250px" src={currentPokemon.imgUrl} alt="current pokemon" />}
          </div>
        </div>
        <div className="w-2/3 border-l-2 ">
          {children}
        </div>
      </div>
    </div>
  );
}