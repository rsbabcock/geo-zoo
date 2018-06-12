import React, { Component } from "react"


export default class Scores extends Component {
    render() {
        return (
            <div className="card score">
                <div className="card-body">
                    {this.props.scores.map(score => (
                        <div>
                        <div>
                            <h5 className="card-title">
                                {score.user.firstName}  {score.user.lastName}
                            </h5>
                        </div>
                        <div>
                            <h4> Final Score: </h4>
                        </div>
                        <div>
                            <p className="card-text">
                                {score.finalScore}
                            </p>
                        </div>
                        </div>
                ))}
                </div>
            </div>
        )
    }
}
