import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const pokemonListAction = createAsyncThunk('pokemon/list', async (URL: string)=>{
    return await axios.get(URL)
    .then(res => {
        return res.data
    })
    .catch(err =>{
        console.log(err)
        return err
    })
})

export const pokemonDetailsAction = createAsyncThunk('pokemon/details', async (URL: string) => {
    return await axios.get(URL)
    .then(res => {
        return res.data
    })
    .catch(err =>{
        console.log(err)
        return err
    })
})