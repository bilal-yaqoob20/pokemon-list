import React, { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { pokemonDetailsAction, pokemonListAction } from "../pokemonService"
import { Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { extractNumber } from "../utils"

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginBottom: '20px',
    borderRadius: '15px !important',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  },
});

const PokemonList: React.FC= () =>{
    const classes = useStyles();
    const dispatch =  useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const pokemons = useSelector((state: RootState) => state.pokemonList)

    useEffect(() => {
        dispatch(pokemonListAction('https://pokeapi.co/api/v2/pokemon/'))
    }, [])

    return (
        <div className={classes.container}>
            {pokemons.isSuccess && <> <Typography marginBottom={3} variant="h2" >Pokemon List</Typography>
            <InfiniteScroll
                dataLength={pokemons.data.length}
                hasMore={pokemons.data.length < pokemons.count}
                next={()=>dispatch(pokemonListAction(pokemons.nextCall))}
                loader={<h4>Loading....</h4>}
            >
                <div style={{ width: '100%', maxWidth: '800px' }}>
                    {pokemons.data.map((pokemon, index) => (
                        <Card key-={index} className={classes.card} variant="outlined" sx={{ cursor: 'pointer' }} onClick={() => {
                            dispatch(pokemonDetailsAction(pokemon.url))
                            navigate(`/details/${extractNumber(pokemon.url)}`)}}>
                            <CardContent>
                                <Typography variant="h5" component="div" color='#7c7676'>
                                    {pokemon.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </InfiniteScroll></>}
        </div>
    )
}

export default PokemonList
