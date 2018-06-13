import React, { Component } from "react"
// import { Columns, Column, Field, Control, Input, Button, Image } from 'bloomer'
import 'bulma/css/bulma.css'
// import logo from "../img/Group.png"
import Scores from "./Scores"
// import geoZoo from "../img/words.png"
// import { Columns } from "bloomer/lib/grid/Columns";
// import { Column } from "bloomer/lib/grid/Column";


class ScoreList extends Component {

    // Set initial state
    state = {
        scores: []
    }
    unique = 1


    // Handle for getting all scores
    handleScores = (user) => {
        // Determine if a user already exists in API
        fetch("http://localhost:8088/scores?_expand=user")
            .then(r => r.json())
            .then(scores => {
                console.log(user)
                const userScore = []
                scores.forEach(score => {
                    if (score.userId == user) {
                        // debugger
                        userScore.push(score)
                        console.log(userScore)
                        this.setState({
                            scores: userScore
                        })
                    }
                })
            })
    }

    componentDidMount() {
        this.handleScores(this.props.activeUser)
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Scores </h1>
                </div>
                <div>
                    <Scores scores={this.state.scores} key={this.unique++} />
                </div>
            </div>

        )
    }
}

export default ScoreList
