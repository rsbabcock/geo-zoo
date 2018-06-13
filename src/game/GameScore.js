import React, { Component } from "react"
import { Box, Button } from 'bloomer'


export default class GameScore extends Component {
    // state = {
    //     userinfo: []
    // }
    // receives user score and active user 
    postScore = () => {fetch("http://localhost:8088/scores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: this.props.activeUser,
            finalScore: this.props.score,
            timeStamp: new Date()
        })
        })
        .then(r => r.json())
        .then(score => {
            // and posts to api as well as gives message
            console.log("score saved")
        })
    }
    

    componentDidMount() {
        this.postScore()
    }

    render() {
        return (
            <div>
            <div className="card score">
                <div className="card-body">
                    <Box>
                        <h1> Congrats </h1>
                        <h3>You scored {this.props.score} out of {this.props.counter + 1}!</h3>
                    </Box>
                </div>
            </div>
            <div>
                <Button
                    type="submit"
                    isColor='primary'
                    isOutlined id="button__welcome"
                    onClick={this.props.showView}>
                    Play Again!
                        </Button>
            </div>
            </div>
                )
    }
}
