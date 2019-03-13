import React, { Component } from 'react';
import './App.css';

import ParallaxComponent from './components/Parallax/Parallax';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParallaxComponent />
      <Footer />
      </div>
    );
  }
}

export default App;
