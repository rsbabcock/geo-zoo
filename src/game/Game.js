import React, { Component } from 'react'
// continents images
// animal component pages
import Animal from './animals/Animal';



class Game extends Component {
    uniqueKey = 1
    

    render() {
        return (
            <article>
                <Animal animals={this.props.animals} 
                // animalImg={this.props.animalImg} 
                continents={this.props.continents}
                // continentImg={this.props.continentImg} 
                counter={this.props.counter}
                gameCounter={this.props.gameCounter}
                key={this.uniqueKey++}/>
            </article>
        )
    }
}


export default Game