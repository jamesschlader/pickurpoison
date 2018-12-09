import React, { Component } from 'react'

export default class ClickCard extends Component {
  render() {
    let styles = `uk-card uk-card-hover uk-card-body uk-margin-right uk-margin-left uk-margin-bottom `
    return (
      
        <div className={styles} click={this.props.clicked} onClick={(event) => this.props.onClick(this.props.master, event, this.props.id)}>
            <img src={this.props.src} width="100px" height="100px" alt={this.props.name} classNmae="uk-img"></img>
         
        </div>
   
    )
  }
}
