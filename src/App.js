import React, { Component } from "react";
import ClickCard from "./components.js/ClickCard";
import HalfGrid from "./components.js/HalfGrid";
import Card from "./components.js/Card";
import GOModal from "./components.js/GOModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      game: 1,
      highScore: null,
      gameOver: false,
      panels: [
        {
          id: 0,
          name: "poison1",
          clicked: false,
          image: "images/poison1.svg"
        },
        {
          id: 1,
          name: "poison2",
          clicked: false,
          image: "images/poison2.svg"
        },
        {
          id: 2,
          name: "poison3",
          clicked: false,
          image: "images/poison3.svg"
        },
        {
          id: 3,
          name: "poison4",
          clicked: false,
          image: "images/poison4.svg"
        },
        {
          id: 4,
          name: "poison5",
          clicked: false,
          image: "images/poison5.svg"
        },
        {
          id: 5,
          name: "poison6",
          clicked: false,
          image: "images/poison6.svg"
        },
        {
          id: 6,
          name: "poison7",
          clicked: false,
          image: "images/poison7.svg"
        },
        {
          id: 7,
          name: "poison8",
          clicked: false,
          image: "images/poison8.svg"
        },
        {
          id: 8,
          name: "poison9",
          clicked: false,
          image: "images/poison9.svg"
        },
        {
          id: 9,
          name: "poison10",
          clicked: false,
          image: "images/poison10.svg"
        },
        {
          id: 10,
          name: "poison11",
          clicked: false,
          image: "images/poison11.svg"
        },
        {
          id: 11,
          name: "poison12",
          clicked: false,
          image: "images/poison12.svg"
        }
      ]
    };
  }

  shuffleDeck = (array, event, key) => {
    event.preventDefault();

    const clicked = array.find(item => item.id === key);
    if (!clicked.clicked) {
      clicked.clicked = !clicked.clicked;

      this.setState({
        total: this.state.total + 1,
        highScore:
          this.state.total + 1 > this.state.highScore
            ? this.state.total + 1
            : this.state.highScore
      });

      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

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
        panels: array
      });
    } else {
      this.setState({
        gameOver: !this.state.gameOver
      });
    }
  };

  handleGameOver = object => {
    const setPanels = [];
    object.panels.forEach(item => {
      item.clicked = false;
      setPanels.push(item);
    });

    this.setState({
      highScore:
        object.total > object.highScore ? object.total : object.highScore,
      total: 0,
      game: this.state.game + 1,
      gameOver: false,
      panels: setPanels
    });
  };

  render() {
    const newList = this.state.panels.map(item => (
      <React.Fragment>
        <ClickCard
          key={item.id}
          master={this.state.panels}
          clicked={item.clicked}
          id={item.id}
          name={item.name}
          onClick={this.shuffleDeck}
          src={item.image}
        />
      </React.Fragment>
    ));

    const gameOverModal = (
      <React.Fragment>
        <GOModal {...this.state} onClick={this.handleGameOver} />
      </React.Fragment>
    );

    return (
      <div className="uk-container">
        <div className="uk-section uk-section-secondary uk-light">
          <h1 className=" uk-text-bold uk-text-center uk-text-4.0rem">
            Pick Your Poison
          </h1>
          <h3 className="uk-text-center">
            But don't pick the same one twice or{" "}
            <span className=" uk-text-uppercase uk-text-danger">
              you're dead!
            </span>{" "}
          </h3>
        </div>

        <Card
          operator={this.state.total}
          game={this.state.game}
          highScore={this.state.highScore}
        />

        {!this.state.gameOver ? (
          <HalfGrid>{newList}</HalfGrid>
        ) : (
          <React.Fragment>{gameOverModal}</React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
