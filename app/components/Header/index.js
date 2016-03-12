import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav styleName="navbar">
        <Link to="/" activeClassName="" title="Memenshare">
        <span styleName="brand">Memenshare</span>
        </Link>
      </nav>
    );
  }
}
