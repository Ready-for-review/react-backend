import './App.css';
import {useEffect, useState} from "react";
import {search} from "./pokemonapi";

function App() {
  return (
      <div>
        <Search/>
        <Pokemon name="ditto"/>
      </div>
  );
}

function Pokemon({name}) {
  const [pokemon, setPokemon] = useState(null)
  useEffect(function () {
    search(name).then(function (result) { // it's the same like await
      setPokemon(result)
    })
  }, [])


  return pokemon ?
      <>
      <img
          src={pokemon.sprites.front_default} width="200" height="200"/>
      <h1>{pokemon.name}</h1>
      </> : ""
}

function Search() {
  return ""
}

export default App;
