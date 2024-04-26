import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Link } from "react-router-dom";
import { emptyState } from "../store/slices/pokemonDetailReducer";

const PokemonDetails: React.FC = () => {
    const dispatch =  useDispatch<AppDispatch>()
    const pokemon = useSelector((state: RootState) => state.pokemonDetails);

    return (
        <>{pokemon.isSuccess && <Box display="flex" flexDirection="column" alignItems="center">
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button onClick={()=> dispatch(emptyState())} sx={{ marginBottom: 2 }}>Go back</Button>
            </Link>
            <Box bgcolor="white" borderRadius={'50%'} padding={4} boxShadow={3} maxWidth={400} textAlign="center">
                <img alt='pic' height={300} width={300} src={pokemon.picture}/>
            </Box>
            <Box bgcolor="white" borderRadius={16} padding={4} boxShadow={3} maxWidth={400} textAlign="center" marginTop={5}>
                <Typography variant="h5">Name: <strong>{pokemon.name}</strong></Typography>
                <Typography variant="h5">Height: <strong>{pokemon.height}</strong></Typography>
                <Typography variant="h5">Weight: <strong>{pokemon.weight}</strong></Typography>
                <Typography variant="h5">Types: <strong>{pokemon.types.join(", ")}</strong></Typography>
            </Box>
        </Box>}
        </>
    );
}

export default PokemonDetails;
