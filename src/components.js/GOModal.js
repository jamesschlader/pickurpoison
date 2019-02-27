import React, { Component } from "react";

export default class GOModal extends Component {
  render() {
    const styles = {
      backgroundColor: "red"
    };
    return (
      <div
        className="uk-padding-large uk-text-center uk-background-muted "
        style={styles}
      >
        <h1>GAME OVER!</h1>
        <h3>You finished the game with {this.props.total} poisons picked. </h3>
        <h3>
          The current high score is{" "}
          {this.props.total > this.props.highScore
            ? this.props.total
            : this.props.highScore}
          .{" "}
        </h3>

        <button
          className="uk-button uk-button-default"
          onClick={e => this.props.onClick(this.props)}
        >
          Start Over
        </button>
      </div>
    );
  }
}
