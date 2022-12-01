import React, { Component } from 'react';

export default class Curiosidade extends Component {
  render() {
    return (
      <div>
        <img src="./." alt="Stomatopoda" />
        <p>
          &nbsp O segundo par de patas, muito desenvolvido, é usado tanto para atacar a
          presa como para se defender. O
          {' '}
          <strong><em>urópodo</em></strong>
          , quando aberto, também funciona
          para defesa, como um escudo, fechando a galeria em que o animal esteja
          instalado. A fêmea desova no local onde se abriga e, em caso de perigo,
          enrola os ovos como uma bola, prendendo-os junto ao corpo até encontrar
          um abrigo mais protegido.
        </p>
      </div>
    );
  }
}
