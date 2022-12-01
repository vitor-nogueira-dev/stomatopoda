import React, { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Soco a 80km/h ?</h1>
        <h4>Conheça o Stomatopoda</h4>
        <Nav />
      </header>
    );
  }
}
