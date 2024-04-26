import { createSlice } from "@reduxjs/toolkit";
import { IPokemonDetailServiceclear } from "../../interfaces";
import { pokemonDetailsAction } from "../../pokemonService";

const initialState: IPokemonDetailService = {
    name: '',
    height: 0,
    types: [],
    weight: 0,
    picture: '',
    isSuccess: false,
    isLoading: false
}

const pokemonDetailReducer = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        emptyState() {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pokemonDetailsAction.pending, (state: IPokemonDetailService) => {
            state.isLoading = true
        })
        builder.addCase(pokemonDetailsAction.fulfilled, (state: IPokemonDetailService, action: any) => {
            const { name, height, weight, types, sprites }= action.payload
            state.isLoading = false
            state.isSuccess = true
            const newTypes = types.map((type: any) => type.type.name)
            state.name = name
            state.height = height
            state.weight = weight
            state.types= [...newTypes]
            state.picture = sprites.other.dream_world.front_default
        })
        builder.addCase(pokemonDetailsAction.rejected, (state: IPokemonDetailService, action: any) => {
            state.isLoading = true
            state.isSuccess = false
            console.log('Error: ', action.payload)
        })
    }
})

export default pokemonDetailReducer.reducer

export const { emptyState } = pokemonDetailReducer.actions;
