import React, { useState } from "react";
import axios from "axios";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
      height: 340,
      margin: 10,
      borderRadius: 10,
    //   border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& > *':{
          padding: '1px 2px 2px 2px'
      }
  },
  containers: {
    height: 340,
    margin: 10,
    borderRadius: 10,
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '& > *':{
        padding: '1px 2px 2px 2px'
    }
},
  image: {
      height: 180,
      width: '100%',
      objectWidth: 'cover',
      borderRadius: '10px 10px 0 0'
  },      
  text: {
      fontSize: 18,
      color: "#0075BE"
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#FFCC00"
  },
  form: {
        padding: 55,
  },
  input: {
      height: 40,
      width: 300,
      fontSize: 18,
      textAlign: 'center'
      
  },
})

const Pokemon = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <Box className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label>
          <input className={classes.input}
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {

        return (
          <Grid item lg={3} sm={4} xs={12}>
          <Box className="containers">
            <img src={data.sprites["front_default"]} alt="pokemon" className={classes.image}/>
            <Box><Typography className={classes.heading}>Type: </Typography>
            <Typography className={classes.text}>{pokemonType}</Typography></Box>
            <Typography className={classes.heading}>Height: </Typography>
            <Typography className={classes.text}>{" "}{Math.round(data.height * 3.9)}"</Typography>
            <Typography className={classes.heading}>Weight: </Typography>
            <Typography className={classes.text}>{" "}{Math.round(data.weight / 4.3)} lbs</Typography>
            <Typography className={classes.heading}>Number Of Battles: </Typography>
            <Typography className={classes.text}>{data.game_indices.length}</Typography>
          </Box>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Pokemon;