import React, { useEffect, useState } from 'react';

import './styles.css';
import api from '../../services/api';

interface Pokemon {
  name:String
  id:number
}

const Pokedex: React.FC = () => {


  const [pokemon,setPokemon] = useState<Pokemon>()
  useEffect(() => {
    api.get('1').then((response) => {
      console.log(response.data);
      setPokemon(response.data)
    });
  }, []);

  return (
      <div className="pokedex-container">
        
        <div className="pokedex-info-container">
          <div className="pokedex-info-title">pokemon.</div>

          <div className="pokedex-info-data">
            <div className="pokedex-data-title">Atributes facts.</div>
            <div className="pokedex-data-data"></div>
            <div className="pokedex-data-button-div">
            <button className="pokedex-data-button">Press Me</button>
            </div>
          </div>

        </div>

        <div className="pokedex-image-container">

          <div className="pokedex-image">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon && pokemon.id}.png`} alt=""/>
          </div>
          <div className="pokedex-image-button-div">
            <button className=""></button>
          </div>

        </div>
      </div>
    );
};

export default Pokedex;
