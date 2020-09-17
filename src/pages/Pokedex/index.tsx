import React, { useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

const Pokedex: React.FC = () => {
  useEffect(() => {
    api.get('1').then((response) => {
      console.log(response);
    });
  }, []);
  return <div className="">Hello</div>;
};

export default Pokedex;
