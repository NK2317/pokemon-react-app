import { Stat } from "../store/features/pokemonSlice";
import ProgressBar from "./progress-bar";

export default function StatList({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((stat) => (
        <div key={`_pok_stat${stat.stat.name}`} className="flex flex-row justify-between">
          <div className="text-2xl text-bold">{stat.stat.name}</div>
          <ProgressBar progress={stat.base_stat} />
        </div>
      ))}
    </>
  );
}