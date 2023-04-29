import { createSlice } from "@reduxjs/toolkit";

export type PokemonBasic = {
  name: string;
  url: string;
};

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  }
}

export interface Pokemon {
  imgUrl: string;
  type: string;
  name: string;
  number: number;
  height: number;
  weight: number;
  stats: Stat[];
  abilities: Ability[];
};

export interface PokemonState {
  pokemonList: PokemonBasic[];
  currentPokemon: Pokemon;
};

const initialState: PokemonState = {
  pokemonList: [],
  currentPokemon: {} as Pokemon,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { setPokemonList, setCurrentPokemon } = productsSlice.actions;
