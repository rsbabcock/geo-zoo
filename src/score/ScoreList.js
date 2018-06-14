import React, { Component } from "react"
import 'bulma/css/bulma.css'
import Scores from "./Scores"
import { Hero, Title, Notification, Container } from 'bloomer'
import './scores.css'



class ScoreList extends Component {

    // Set initial state
    state = {
        scores: []
    }
    unique = 1


    // Handle for getting all scores
    handleScores = () => {
        // Determine if a user already exists in API
        fetch(`http://localhost:8088/scores?userId=${this.props.activeUser}&_expand=user`)
            .then(r => r.json())
            .then(scores => {
                // console.log(user)
                // const userScore = []
                // scores.forEach(score => {
                    // if (+score.userId === user) {
                        // debugger
                        // userScore.push(score)
                        // console.log(userScore)
                        this.setState({
                            scores: scores
                        })
                    })
                // })
            // })
    }

    componentDidMount() {
        this.handleScores()
    }

    render() {
        return (
            <div>

                    <Container isFluid>
                    <Notification  style={{ textAlign: 'center'}} isColor="primary"> <Title> Scores </Title> </Notification>
                    <Scores scores={this.state.scores} key={this.unique++} />
                    </Container>

            </div>

        )
    }
}

export default ScoreList
