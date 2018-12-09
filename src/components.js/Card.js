import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let styles = `uk-card uk-card-hover uk-card-body uk-margin-right uk-margin-left uk-margin-bottom `
    return (
      
        <div className={styles} >
            <h3 className="uk-card-title" >You've clicked {this.props.operator} poisons without dying!</h3>
            <h5>High Score: {this.props.children}</h5>
        </div>
   
    )
  }
}
