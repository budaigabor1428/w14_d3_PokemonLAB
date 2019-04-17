import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './Container/PokemonContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <h4>Pokemons:</h4>
        <PokemonContainer/>
      </div>
    );
  }
}

export default App;
