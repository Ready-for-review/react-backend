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
  return <>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
          <h1>Pikachu</h1>
         </>
}

function Search() {
  return ""
}

export default App;
