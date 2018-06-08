import React, { Component } from 'react'
// continents images
import africa from "../img/aImg/africa.png"
import asia from "../img/aImg/asia.png"
import nAmerica from "../img/aImg/northamerica.png"
// animals images
import rhino from "../img/aImg/rhino.png"
import dog from "../img/aImg/wildDog.png"
import gorilla from "../img/aImg/mtGorilla.png"
import tiger from "../img/aImg/tiger.png"
import elephant from "../img/aImg/elephant.png"
import leopard from "../img/aImg/leopard.png"
import orangutan from "../img/aImg/orangutan.png"
import turtle from "../img/aImg/hawksbillTurtle.png"
import vaquita from "../img/aImg/vaquitaBetter.png"
// animal component pages
import Rhino from './animals/Rhino';



class Game extends Component {

    state = {
        animals: [],
        animalImg: [],
        continents: [],
        continentImg: [],
        drag: "",
        userScore: 0,
    }
    // props: activeUser={this.state.activeUser} showView={this.showView}
    uniqueKey = 1
    // needs to do: 
    // function to get all animals from the api for game pieces
    getAnimals = () => {
        fetch("http://localhost:8088/animals")
        .then(r => r.json())
        .then(animals => {
            this.setState({
                animals: animals
            })
        })
    }
    // gets all animal images
    getAnimalImg = () => {
        this.state.animalImg.push(rhino, dog, gorilla, tiger, elephant, leopard, orangutan, turtle, vaquita)
        // console.log(this.state.)
    }

    // gets all continents from api for information
    getContinents = () => {
        fetch("http://localhost:8088/continents")
        .then(r => r.json())
        .then(c => {
            this.setState({
                continents: c
            })
        })
    }
    // gets all the continent images from local files and pushes them in an array for ease of use
    getContinentImages = () => {
            this.state.continentImg.push(africa, asia, nAmerica)
            console.log(this.state.continents)
    }



    componentDidMount(){
        this.getAnimals()
        this.getAnimalImg()
        this.getContinents()
        this.getContinentImages()
    }

    render() {
        return (
            <article>
                <Rhino animals={this.state.animals} 
                animalImg={this.state.animalImg} 
                continents={this.state.continents}
                continentImg={this.state.continentImg} 
                showView={this.props.showView}
                key={this.uniqueKey++}/>
            </article>
        )
    }
}


export default Game