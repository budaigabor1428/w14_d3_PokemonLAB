import React, { Component } from 'react';
import SelectPokemon from '../Components/SelectPokemon.js'
import CurrentPokemon from '../Components/CurrentPokemon'
import PokemonDetail from '../Components/PokemonDetail'

class PokemonContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null,
      pokemonDetail: null
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }


  componentDidMount() {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
      const request = new XMLHttpRequest();
      request.open('GET', url);

      request.addEventListener("load", () => {
        if (request.status !== 200) return;
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({pokemons: data.results})
        console.log(this.state.pokemons);
      });

      request.send();
    }

    

    handlePokemonSelected(index) {

      const selectedPokemon = this.state.pokemons[index];
      this.setState({currentPokemon: selectedPokemon})

      console.log(selectedPokemon);
      if (!selectedPokemon) return;
      const url = selectedPokemon.url;
      console.log(url);
      const request = new XMLHttpRequest();
      request.open('GET', url);

      request.addEventListener("load", () => {
        if (request.status !== 200) return;
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({pokemonDetail: data})
      });

      request.send();

    }

    render(){
      return(
          <div>
          <SelectPokemon pokemons={this.state.pokemons} onHandlePokemonSelected={this.handlePokemonSelected}/>
          <PokemonDetail pokemon = {this.state.pokemonDetail}/>
          </div>
      )
    }


}

export default PokemonContainer;
