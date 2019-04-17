import React, {Component} from 'react';
import PokemonDetail from './PokemonDetail'


class CurrentPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetail: []
    }

  }

  componentDidMount() {
      const url = this.props.pokemon.url;
      console.log(url);
      const request = new XMLHttpRequest();
      request.open('GET', url);

      request.addEventListener("load", () => {
        if (request.status !== 200) return;
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({pokemonDetail: data.abilities})
      });

      request.send();
    }

    render(){
      return(
        <PokemonDetail/>
      )
    }

  }


export default CurrentPokemon;
