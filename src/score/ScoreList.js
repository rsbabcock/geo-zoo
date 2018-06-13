import React, { Component } from "react"
// import { Columns, Column, Field, Control, Input, Button, Image } from 'bloomer'
import 'bulma/css/bulma.css'
// import logo from "../img/Group.png"
import Scores from "./Scores"
// import geoZoo from "../img/words.png"
import { Hero, Title, Notification } from 'bloomer'
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
                // console.log(user)
                const userScore = []
                scores.forEach(score => {
                    if (+score.userId === user) {
                        // debugger
                        userScore.push(score)
                        // console.log(userScore)
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
                <Hero> 
                    <Notification  style={{ textAlign: 'center'}} isColor="primary"> <Title> Scores </Title> </Notification>
                    <Scores scores={this.state.scores} key={this.unique++} />
                </Hero>
            </div>

        )
    }
}

export default ScoreList
