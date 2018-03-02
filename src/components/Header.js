import React, { Component } from 'react';
import '../App.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav>
          <ul>
            <li>Shazi</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact me</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
