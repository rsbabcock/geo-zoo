import React, { Component } from "react"
import { Notification, Title, Container } from 'bloomer'
import {Doughnut} from 'react-chartjs-2'


export default class Scores extends Component {

    // timeConverter = function(date)
    // { date.toDateString()
    // }.bind(this)

    render() {
        return (
            <div className="card score">
                <Container isFluid style={{ margin: 20 }} className="card-body">
                    {this.props.scores.map(score => (
                        <Notification style={{ textAlign: 'center' }} isColor="light" key={score.id}>
                            <div>
                                <Title id="player" isSize={3}>
                                    {score.user.firstName}  {score.user.lastName}
                                </Title>
                            </div>
                            <div>
                                <h4> Final Score: {score.finalScore}</h4>
                                <p className="card-text">
                                    {score.timeStamp}
                                </p>
                            </div>
                        </Notification>
                    ))}
                </Container>
                <Container className="chart">
                    <h6>Your Scores!</h6>
                    <Doughnut data={this.props.chartData} />
                </Container>
            </div>
        )
    }
}
