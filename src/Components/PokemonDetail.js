import React from 'react';

  const PokemonDetail = (props) => {

    if(!props.pokemon) return null;
    return(
      <div>
      <p>id: {props.pokemon.id}</p>
      <p>abilities: {props.pokemon.abilities[0].ability.name}</p>
      </div>


    )
  }

export default PokemonDetail;
