import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';
import Register from './auth/Register';
import Login from './auth/Login';
import Welcome from './welcome/Welcome';
import Game from './game/Game';
// import SearchResults from './search/SearchResults';
// import ProfileView from './profile/ProfileView'
import africa from "./img/aImg/africa.png"
import asia from "./img/aImg/asia.png"
import nAmerica from "./img/aImg/northamerica.png"
// animals images
import rhino from "./img/aImg/rhino.png"
import dog from "./img/aImg/wildDog.png"
import gorilla from "./img/aImg/mtGorilla.png"
import tiger from "./img/aImg/tiger.png"
import elephant from "./img/aImg/elephant.png"
import leopard from "./img/aImg/leopard.png"
import orangutan from "./img/aImg/orangutan.png"
import turtle from "./img/aImg/hawksbillTurtle.png"
import vaquita from "./img/aImg/vaquitaBetter.png"

class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        activeUser: localStorage.getItem("geoId"),
        correctGuess: false,
        animals: [],
        animalImg: [],
        continents: []
          // data: []
          // images: [],
          ,
        counter: 0
        }
        // uniqueKey: 1
        
    // Function to update local storage and set activeUser state
    setActiveUser = (val) => {
        if (val) {
            localStorage.setItem("geoId", val, )
        } else {
            localStorage.removeItem("geoId")
        }
        this.setState({
            activeUser: val
        })
    }
    // View switcher -> passed to NavBar and Login
    // Argument can be an event (via NavBar) or a string (via Login)
    showView = function (e) {
      // debugger
        let view = null

        // Click event triggered switching view
        if (e.hasOwnProperty("target")) {
            view = e.target.id.split("__")[1]

            // View switch manually triggered by passing in string
        } else {
            view = e
        }

        // If user clicked logout in nav, empty local storage and update activeUser state
        if (view === "logout") {
            this.setActiveUser(null)
        }

        // Update state to correct view will be rendered
        this.setState({
            currentView: view
        })

    }.bind(this)
    // getannimals
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
    this.setState({
      animalImg: [rhino, dog, gorilla, tiger, elephant, leopard, orangutan, turtle, vaquita]
    })
      // console.log(this.state.)
  }
  // gets all continents from api for information
  getContinents = () => {
    const foundStuff = {}
      fetch("http://localhost:8088/continents")
      .then(r => r.json())
      .then(c => {
        // foundStuff.data = c
        // foundStuff.images = [africa, asia, nAmerica]
          this.setState({
            continents : c
          })
      })
  }
  // gets all the continent images from local files and pushes them in an array for ease of use
  // function to change counter
  gameCounter = function (e){
    // e.preventDefault
    if(this.state.counter < this.state.animalImg.length-1 ) {
      this.setState({
        counter : this.state.counter+1
      })
    } else {
      return alert("all done")
    }
    // debugger

  }.bind(this)

  componentDidMount(){
        this.getAnimals()
        this.getAnimalImg()
        this.getContinents()
        console.log(this.state.continents)
    }


    View = () => {
        if (localStorage.getItem("geoId") === null && this.state.currentView !== "register") {
          return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
        }
        else if (localStorage.getItem("geoId") === null && this.state.currentView === "register") {
          return <Register showView={this.showView} setActiveUser={this.setActiveUser}/>
        }
        else {
            switch (this.state.currentView) {
                case "logout":
                    return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
                case "game":
                    return <Game animals={this.state.animals} 
                    animalImg={this.state.animalImg}
                     continents={this.state.continents} 
                     counter={this.state.counter}
                     activeUser={this.state.activeUser} 
                     gameCounter={this.gameCounter}/>
                case "welcome":
                default: 
                  return <Welcome activeUser={this.state.activeUser} showView={this.showView}/>
            }
        }
    }

    render() {
        return (
            <article>
                <NavBar viewHandler={this.showView}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                    // profileHandler={this.viewProfile}
                />

                {this.View()}
            </article>
        )
    }
  }


export default App
