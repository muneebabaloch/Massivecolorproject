import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { generatePalette } from './Colorhelpers';
import Palette from './Palette'
import seedColor from './seedColor';

 class App extends Component {
  render() {
  
    return (
      <div>
        <Palette palette={generatePalette(seedColor[1])}/>
      
      </div>
    )
  }
}

export default App;