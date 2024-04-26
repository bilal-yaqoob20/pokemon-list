import { createSlice } from "@reduxjs/toolkit";
import { IPokemonService } from "../../interfaces";
import { pokemonListAction } from "../../pokemonService";

const initialState: IPokemonService = {
    count: 0,
    nextCall: '',
    isLoading: false,
    data: [],
    isSuccess: false
}

const pokemonListReducer = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(pokemonListAction.pending, (state: IPokemonService) => {
            state.isLoading = true
        })
        builder.addCase(pokemonListAction.fulfilled, (state: IPokemonService, action: any) => {
            const { count, next, results } = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.count = count
            state.nextCall = next
            state.data = [...state.data, ...results]
        })
        builder.addCase(pokemonListAction.rejected, (state: IPokemonService, action: any) => {
            state.isLoading = true
            state.isSuccess = false
            console.log('Error: ', action.payload)
        })
    }
})

export default pokemonListReducer.reducer