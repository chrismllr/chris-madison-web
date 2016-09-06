import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

class Header extends Component {

  constructor (props) {
    super(props);

    this.state = { navOpen: false };
  }

  toggleNav = () =>
    this.setState({ navOpen: !this.state.navOpen });

  render () {
    return (
      <div className="Header-fixed">
        <div className="container">
          <div className="Header">
            <h1>Madison &amp; Chris</h1>

            <Nav
              navItemClicked={this.props.navItemClicked}
              navOpen={this.state.navOpen}
              toggleNav={this.toggleNav}
            />

            <i onClick={this.toggleNav} className='icon-menu Nav-burger'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
