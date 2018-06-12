import React, { Component } from 'react'
// continents images
// animal component pages
import Animal from './animals/Animal';



class Game extends Component {
    uniqueKey = 1
    
    gameHandler = function (e) {
        // event that checks if the continent clicked is
        //  correct one for the current animal
        // if correct then alerts user and
        // adds score 
        e.preventDefault()
        console.log(e.currentTarget.id)
        console.log("you click me!")
        // if(e.target.id == this.props.animals[0].id){
        //     alert("a match!")
        // }
    } 

    render() {
        return (
            <article>
                <Animal animals={this.props.animals} 
                // animalImg={this.props.animalImg} 
                continents={this.props.continents}
                // continentImg={this.props.continentImg} 
                counter={this.props.counter}
                gameCounter={this.props.gameCounter}
                gameHandler={this.gameHandler}
                key={this.uniqueKey++}/>
            </article>
        )
    }
}


export default Game