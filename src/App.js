import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';
import Register from './auth/Register';
import Login from './auth/Login';
import Welcome from './welcome/Welcome';
// import SearchResults from './search/SearchResults';
// import ProfileView from './profile/ProfileView'

class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        activeUser: localStorage.getItem("geoId"),
        animals: [],
        continents: [],
        userScore: 0,
        drag: "",
        correctGuess: false,
        gamePlay: ""
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

    /*
        Function to determine which main view to render.

        TODO:
            1. Profile view
            2. Register view
            3. Create event view
    */
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
                // case "results":
                //     return <SearchResults resultsSearch={this.state.resultsSearch} />
                case "welcome":
                default: 
                  return <Welcome activeUser={this.state.activeUser}/>
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
