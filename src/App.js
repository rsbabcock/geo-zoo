import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';
import Register from './auth/Register';
import Login from './auth/Login';
import Welcome from './welcome/Welcome';
import Game from './game/Game';


class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        activeUser: localStorage.getItem("geoId"),
        userScore: 0,
        animals: [],
        continents: [],
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
  // get annimals
    getAnimals = () => {
      fetch("http://localhost:8088/animals")
      .then(r => r.json())
      .then(animals => {
          this.setState({
              animals: animals
          })
      })
  }
  // function to get all continenet info
  getContinents = () => {
    // const foundStuff = {}
      fetch("http://localhost:8088/continents")
      .then(r => r.json())
      .then(c => {
          this.setState({
            continents : c
          })
      })
  }
  // function to change counter to increment game pages one at a time
  gameCounter = function (e){
    // e.preventDefault
    if(this.state.counter < this.state.animals.length-1 ) {
      this.setState({
        counter : this.state.counter+1
      })
    } else {
      return alert("all done")
    }
    // debugger

  }.bind(this)
  // function to handle game play
  gameHandler = function (animalContinent, currentContinent) {
    // e.preventDefault()
    // event that checks if the continent clicked is
    //  correct one for the current animal
    if(animalContinent === currentContinent) {
        // if correct then alerts user and
        alert("That's correct!")
        // adds score 
        this.setState({
          userScore : this.state.userScore+1
        })
    } else { alert("That's incorrect")}
}.bind(this)
  // Component that gets all animal and continent info
  componentDidMount(){
        this.getAnimals()
        this.getContinents()
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
                    // animalImg={this.state.animalImg}
                     continents={this.state.continents} 
                     counter={this.state.counter}
                     activeUser={this.state.activeUser} 
                     gameCounter={this.gameCounter}
                     gameHandler={this.gameHandler}
                     userScore={this.state.userScore}/>
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
