import React from 'react';

  const PokemonDetail = (props) => {
    if(!props.pokemon) return null;
    const abilities = props.pokemon.abilities.map(ability => {return <p>{ability.ability.name}</p>})



    return(
      <div>
      <p>id: {props.pokemon.id}</p>
      {abilities}
      <p><img src={props.pokemon.sprites.back_default} width = "1500px"/></p>
      </div>


    )
  }

export default PokemonDetail;
