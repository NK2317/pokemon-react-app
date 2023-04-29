import { Ability } from "../store/features/pokemonSlice";

export default function AbilitiesList({ abilities }: { abilities: Ability[] }) {
  return (
    <>
      {abilities?.map(({ ability }) => (
        <div key={`_pok_ability${ability.name}`} className="w-full text-center">
          <div className="text-2xl text-bold">{ability.name}</div>
        </div>
      ))}
    </>
  );
}