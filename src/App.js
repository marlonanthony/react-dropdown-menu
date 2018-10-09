import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    displayMenu: false 
  }

  onMouseEnter = () => {
    this.setState({ displayMenu: true })
  }

  onMouseLeave = () => {
    this.setState({ displayMenu: false })
  }

  render() {
    return (
      <div className="dropdown" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <button className="dropdown_hover">| | |</button>
        { this.state.displayMenu ? (
          <div className='dropdown_menu'>
            <a href="#Sign In">Sign In</a>
            <a href="#Sign Up">Sign Up</a>
          </div>
        ) : null }
      </div>
    );
  }
}

export default App;
