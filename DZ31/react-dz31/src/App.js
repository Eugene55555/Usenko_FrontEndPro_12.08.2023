import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Список товарів:</h1>
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;