import React, { Component } from "react"
import { Notification, Title, Container } from 'bloomer'
import {Doughnut} from 'react-chartjs-2'


export default class Scores extends Component {

    render() {
        return (
            <div className="score">
                <Container isFluid style={{ margin: 20 }}>
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
                <Container style={{height: 500}} className="chart">
                    <h6>Your Scores!</h6>
                    <Doughnut  data={this.props.data} options={this.props.options} />
                </Container>
            </div>
        )
    }
}
