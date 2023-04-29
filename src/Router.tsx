import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PokemonDetail from "./pages/pokemon-detail";

export default function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-detail" element={<PokemonDetail />} />
    </Routes>
  );
}
