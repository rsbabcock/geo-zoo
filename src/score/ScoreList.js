import React, { Component } from "react"
import 'bulma/css/bulma.css'
import Scores from "./Scores"
import {  Title, Notification, Container } from 'bloomer'
import './scores.css'



class ScoreList extends Component {

    // Set initial state
    state = {
        scores: [],
        chartData: {},
        chartOptions: {}
    }
    unique = 1


    // Handle for getting all scores
    handleScores = () => {
        // Determine if a user already exists in API
        fetch(`http://localhost:8088/scores?userId=${this.props.activeUser}&_expand=user`)
            .then(r => r.json())
            .then(scores => {
                this.setState({
                    scores: scores
                })
            })
    }

    data = function () {
        let c1=0, c2 =0 , c3=0, c4=0, c5=0, c6=0, c7=0, c8=0, c9 = 0, c10=0
        fetch(`http://localhost:8088/scores?userId=${this.props.activeUser}`)
            .then(r => r.json())
            .then(data => {
               data.map(score => {
                    switch (score.finalScore) {
                        case 1:
                             c1++
                            break
                        case 2:
                             c2++
                            break
                        case 3:
                             c3++
                            break
                        case 4:
                             c4++
                            break
                        case 5:
                             c5++
                            break
                        case 6:
                             c6++
                            break
                        case 7:
                             c7++
                            break
                        case 8:
                             c8++
                            break
                        case 9:
                            c9++
                            break
                        default :
                             c10++
                            break
                    }
                    
                })
                console.log(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10)
                // console.log(finalScores)
                this.setState({
                    chartData: {
                        labels: ['10%',
                            '20%',
                            '30%',
                            '40%',
                            '50%',
                            '60%',
                            '70%',
                            '80%',
                            '90%',
                            '100%'],
                        datasets: [{
                            data: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10],
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#B22B00',
                                '#FF916F',
                                '#FF3D00',
                                '#6BB09F',
                                '#BBFFEE',
                                'blue',
                                '#44146f'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ]
                        }],
                        },
                    chartOptions: {
                            legend : {
                                position : 'left',
                                labels : {
                                    fontFamily : "'Luckiest Guy', 'cursive'"
                                }
                            },
                             
                    },
                })
            })
    }.bind(this)

    componentDidMount() {
        this.handleScores()
        this.data()
    }

    render() {
        return (
            <div>

                <Container isFluid>
                    <Notification style={{ textAlign: 'center' }} isColor="primary"> <Title> Scores </Title> </Notification>
                    <Scores scores={this.state.scores} key={this.unique++} data={this.state.chartData} options={this.state.chartOptions} />
                </Container>

            </div>

        )
    }
}


export default ScoreList
