import React, {Component} from 'react';
import './App.css';
import Names from './components/Names.js';

class App extends Component {
  render()
  {
    return (
        <div className="App">
          <h1>Form App</h1>
          <Names />
        </div>
    );
  }
}

export default App;
