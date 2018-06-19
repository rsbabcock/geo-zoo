import React, { Component } from "react"
import { Button } from 'bloomer'
import './gamescore.css'


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
            timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
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
        <div className="gameScore">
            <div>
                <div id="score" >
                    {/* <Box> */}
                        <h1 > Congrats </h1>
                        <h3>You scored {this.props.score} out of {this.props.counter + 1}!</h3>
                    {/* </Box> */}
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
