

import React, { Component } from 'react'

export default class HalfGrid extends Component {
  render() {
    return (
      <div className="uk-child-width-1-4@s uk-grid-match uk-grid uk-grid-large uk-grid">
        {this.props.children}
      </div>
    )
  }
}
