import React, { Component } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: ''
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));

  };

  handleChange = e => {
    this.setState({ SearchField: e.target.value });
  };

  render() {
    console.log(this.state.monsters)
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
