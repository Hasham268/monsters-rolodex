import React, { Component } from 'react';
import {Cardlist} from './components/card-list/card-list-component';
import './App.css';
import { SearchBox } from './components/search-box/search-box-component';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())

      );
      //test

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
            placeholder = 'search monster' 
            handleChange = {e => this.setState({searchField: e.target.value})}/>
        <Cardlist monsters = {filteredMonsters}></Cardlist>
      </div>
    );
  }

}

export default App;
