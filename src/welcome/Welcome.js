import React, { Component } from 'react'

class Welcome extends Component {

    // needs to receive: 
    // currentView, activeUser, UserScore
    // needs to manage:
    // play game function

    render() {
        return (
            <article>
                <h1> Welcome to GeoZoo</h1>
                <h3> Instructions </h3>
                <button id="play__game" onClick={this.props.showView}> Play! </button>
            </article>
        )
    }
}


export default Welcome