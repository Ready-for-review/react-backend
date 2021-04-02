import './App.css';

function App() {
  return (
      <div>
        <Search/>
        <Pokemon/>
      </div>
  );
}

function Pokemon() {
  const [pokemon, setPokemon] = useState(null)
  useEffect(function () {
    search("dummy").then(function (result) {
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
