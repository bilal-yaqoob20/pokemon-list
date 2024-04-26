import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './slices/pokemonListReducer'
import pokemonDetailReducer from './slices/pokemonDetailReducer'

export const store = configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
        pokemonDetails: pokemonDetailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
