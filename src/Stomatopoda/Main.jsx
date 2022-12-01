import React, { Component } from 'react';
import Sobre from './Sobre';
import Visao from './Visao';
import Patas from './Patas';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Sobre />
        <Visao />
        <Patas />
      </div>
    );
  }
}
