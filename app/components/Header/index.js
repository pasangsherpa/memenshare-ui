import React, { Component } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" activeClassName="" title="Memenshare">
        <span styleName="brand">Memenshare</span>
        </Link>
      </header>
    );
  }
}
