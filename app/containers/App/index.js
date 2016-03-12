import React, { Component } from 'react';
import { Link } from 'react-router';

/* application components */
import { Header } from 'components/Header';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };
  
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <footer></footer>
      </section>
    );
  }
}
