import React, { Component } from 'react';

  class SelectPokemon extends Component {
    constructor(props){
      super(props);

      this.handleChange = this.handleChange.bind(this)
    }


  handleChange(event){
    this.props.onHandlePokemonSelected(event.target.value)
    console.log(event.target.value);

  }


  render(){
    const options = this.props.pokemons.map((pokemon, index) => {
      return <option value={index} key={index}>{pokemon.name}</option>
    })
    return(
      <select name="pokemon-selector" id="pokemon-selector" onChange={this.handleChange}>
      <option disabled selected>Choose a Pokemon!</option>
      {options}
      </select>
    )
  }



}


export default SelectPokemon;
