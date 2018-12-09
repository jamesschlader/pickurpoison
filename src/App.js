import React, { Component } from 'react';
import ClickCard from "./components.js/ClickCard";
import HalfGrid from './components.js/HalfGrid';
import Card from "./components.js/Card";
import GOModal from './components.js/GOModal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      highScore: 0,
      gameOver: false,
      panels: [
        {
          id: 0,
          name: "poison1",
          clicked: false,
          image: "/images/poison1.jpg"
        },
        {
          id: 1,
          name: "poison2",
          clicked: false,
          image: "/images/poison2.jpg"
        },
        {
          id: 2,
          name: "poison3",
          clicked: false,
          image: "/images/poison3.jpg"
        },
        {
          id: 3,
          name: "poison4",
          clicked: false,
          image: "/images/poison4.jpg"
        },
        {
          id: 4,
          name: "poison5",
          clicked: false,
          image: "/images/poison5.jpg"
        },
        {
          id: 5,
          name: "poison6",
          clicked: false,
          image: "/images/poison6.jpg"
        },
        {
          id: 6,
          name: "poison7",
          clicked: false,
          image: "/images/poison7.jpg"
        },
        {
          id: 7,
          name: "poison8",
          clicked: false,
          image: "/images/poison8.jpg"
        },
        {
          id: 8,
          name: "poison9",
          clicked: false,
          image: "/images/poison9.jpg"
        },
        {
          id: 9,
          name: "poison10",
          clicked: false,
          image: "/images/poison10.jpg"
        },
        {
          id: 10,
          name: "poison11",
          clicked: false,
          image: "/images/poison11.jpg"
        },
        {
          id: 11,
          name: "poison12",
          clicked: false,
          image: "/images/poison12.jpg"
        },
      ]
    }
  }

  shuffleDeck = (array, event, key) => {
    event.preventDefault();
    console.log(key);
    console.log(`here's the array inside shuffleDeck: `, array);
    console.log(`here's the this.state.list inside shuffleDeck: `, this.state.panels);
    console.log(`here's the this.state.list inside shuffleDeck: `, this.state.panels[key]);
   
    const clicked = array.find(item => item.id === key);
    if (!clicked.clicked) {
      clicked.clicked = !clicked.clicked;
   
      this.setState({
          total: this.state.total + 1,
      });
     
      var currentIndex = array.length, temporaryValue, randomIndex;
  
       // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
  
       // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
      }
      this.setState({
          list: array
        })
    } else {
      this.setState({
        gameOver: !this.state.gameOver
      })
    }
   }

   handleGameOver (object) {
   
    console.log(`this is `, this)
    console.log(`this.state.panel is `, object)
    const setPanels = object.panels.map(item => item.clicked = false)
    this.setState({
      highScore: object.total > object.highScore ? object.total : object.highScore,
      total: 0,
      gameOver: false,
      panels: setPanels
    })
   }

  render() {
    const newList = this.state.panels.map(item => <React.Fragment><ClickCard key={item.id}  master={this.state.panels} clicked={item.clicked} id={item.id} name={item.name} onClick={this.shuffleDeck} src={item.image}>         
    </ClickCard></React.Fragment>);

    const gameOverModal = <React.Fragment><GOModal {...this.state} onClick={this.handleGameOver}/></React.Fragment>

    return (
     <div className="uk-container">
       <div className="uk-section uk-section-secondary uk-light">
       <h1 className=" uk-text-bold uk-text-center uk-text-4.0rem">Pick Your Poison</h1>
       <h3 className="uk-text-center">But don't pick the same one twice or <span className=" uk-text-uppercase uk-text-danger">you're dead!</span> </h3>
       </div>

       <Card operator={this.state.total}>{this.state.highScore}</Card>
   {!this.state.gameOver ? <HalfGrid>{newList}</HalfGrid> : <React.Fragment>{gameOverModal}</React.Fragment>
     
   }
     </div>
    );
  }
}

export default App;
