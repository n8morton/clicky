import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameImage from "./components/GameImage"
import characters from "./characters.json";

class App extends Component {
  
  state = {
    characters,
    score: 0,
    otherChar: characters
    
  };
  
  shuffleChar = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };


  selectChar = (name) => {

    const selection = this.state.otherChar.find(item => item.name=== name);

    if (selection){
      this.setState({
        message: "Correct!",
        score: (this.state.score + 1),
        otherChar:this.state.otherChar.filter(item => item.name !==name)

      });

      this.shuffleChar(characters);

    }else{
      this.setState({
        message: "Incorrect!",
        score: 0,
        otherChar: characters
      })
      this.shuffleChar(characters);
    }

      


        



      
    
  }
  
  render() {
    return (
      <div>
        <h1>Final Fantasy Memory Game</h1>
        <h3>Score:{this.state.score}</h3>
        <h3>{this.state.message}</h3>
        {this.state.characters.map(character => (
          <GameImage
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            selectChar={this.selectChar}
            
          />
        ))}
      </div>
    );
  }
}

export default App;


