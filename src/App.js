import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomCat: []
    }
  }

  componentDidMount() {
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
    .then(res => {
      const randomCat = res.data;
      console.log(randomCat);
      this.setState({ randomCat });
    })
  }

  render() {
    return (
      <div className="App">
       {Object.keys(this.state.randomCat).map((key) => (
         <div>
           <span>{ this.state.randomCat }</span>
         </div>
        ))}
      </div>
    );
  }
}

export default App;
