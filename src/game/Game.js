import React, { Component } from 'react'
// continents images
// animal component pages
import Animal from './animals/Animal';



class Game extends Component {

    state = {
        drag: "",
        userScore: 0,
    }
    // props: activeUser={this.state.activeUser} showView={this.showView}
    uniqueKey = 1
    // needs to do: 
    // function to get all animals from the api for game pieces
    
    // componentDidMount(){
    //     this.getAnimals()
    //     this.getAnimalImg()
    //    this.getContinents()
    //     this.getContinentImages()
    // }

    render() {
        return (
            <article>
                <Animal animals={this.props.animals} 
                animalImg={this.props.animalImg} 
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