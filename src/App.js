import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';
import Register from './auth/Register';
import Login from './auth/Login';
import Welcome from './welcome/Welcome';
import Game from './game/Game';
import ScoreList from "./score/ScoreList"
import GameScore from "./game/GameScore"
import swal from 'sweetalert';
import audio from './audio/buzzer.mp3'



class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        activeUser: localStorage.getItem("geoId"),
        userScore: 0,
        animals: [],
        continents: [],
        counter: 0,
        buzzer: ''
    }


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
        if (view === "welcome") {
            this.setState({
                //   resets score and counter at welcome page
                userScore: 0,
                counter: 0
            })
            //  calls the randomize function so that the animals will be random
            this.randomizeHandler()
        }

        // Update state to correct view will be rendered
        this.setState({
            currentView: view,
        })

    }.bind(this)
    // get annimals
    getAnimals = () => {
        fetch("http://localhost:8088/animals")
            .then(r => r.json())
            .then(animals => {
                let randomals = animals
                // takes array of animals and randomizes in a shuffle method so that they don't repeat 
                for (let i = randomals.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [randomals[i], randomals[j]] = [randomals[j], randomals[i]];
                }
                this.setState({
                    animals: randomals
                })
            })
    }
    // function to get all continenet info
    getContinents = () => {
        fetch("http://localhost:8088/continents")
            .then(r => r.json())
            .then(c => {
                this.setState({
                    continents: c
                })
            })
    }
    // function to handle game play
    gameHandler = function (animalContinent, currentContinent) {
        // event that checks if the continent clicked is
        //  correct one for the current animal
        if (animalContinent === currentContinent) {
            // if correct then alerts user and
            swal("", "That's correct!", "success")
            // adds score 
            this.setState({
                userScore: this.state.userScore + 1
            })
            // keeps the game play to only 10 questions
            if (this.state.counter < 9) {
                this.setState({
                    counter: this.state.counter + 1
                })
            } else if (this.state.counter === 9) {
                this.showView("gameScore")
            }
        } else {
            swal({
                title: "",
                text: "That's incorrect",
                icon: "error",
                // content:{ 
                //     element: "audio",
                //     attributes : {
                //         src : audio,
                //         type: "audio/mp3",
                //         autoPlay: true
                //     }
            })
            if (this.state.counter < 9) {
                this.setState({
                    counter: this.state.counter + 1,
                })

            } else if (this.state.counter === 9) {
                this.showView("gameScore")
            }
        }
    }.bind(this)
    // function to randomize animal input
    randomizeHandler = function () {
        let randomals = this.state.animals
        // this code courtesy of Joshua Barton
        // Goes through array and goes backwards through array and reshuffles array
        for (let i = randomals.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomals[i], randomals[j]] = [randomals[j], randomals[i]];
        }
        this.setState({
            animals: randomals,
            userScore: 0,
            counter: 0,
            currentView: "welcome"
        })
    }.bind(this)

    // Component that gets all animal and continent info
    componentDidMount() {
        this.getAnimals()
        this.getContinents()
        this.randomizeHandler()
    }


    View = () => {
        if (localStorage.getItem("geoId") === null && this.state.currentView !== "register") {
            return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
        }
        else if (localStorage.getItem("geoId") === null && this.state.currentView === "register") {
            return <Register showView={this.showView} setActiveUser={this.setActiveUser} />
        }
        else {
            switch (this.state.currentView) {
                case "logout":
                    return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
                case "game":
                    return <Game animals={this.state.animals}
                        continents={this.state.continents}
                        counter={this.state.counter}
                        activeUser={this.state.activeUser}
                        gameCounter={this.gameCounter}
                        gameHandler={this.gameHandler}
                        userScore={this.state.userScore}
                        randomizeHandler={this.randomizeHandler}
                        randomNum={this.state.randomNum} />
                case "gameScore":
                    return <GameScore score={this.state.userScore} activeUser={this.state.activeUser} counter={this.state.counter} showView={this.randomizeHandler} />
                case "scoreList":
                    return <ScoreList activeUser={this.state.activeUser} />
                case "welcome":
                    return <Welcome activeUser={this.state.activeUser} showView={this.showView} />
                default:
                    return <Welcome activeUser={this.state.activeUser} showView={this.showView} />
            }
        }
    }

    render() {
        return (
            <article>
                <NavBar viewHandler={this.showView}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                    randomizeHandler={this.state.randomizeHandler}
                // profileHandler={this.viewProfile}
                />

                {this.View()}
            </article>
        )
    }
}


export default App
