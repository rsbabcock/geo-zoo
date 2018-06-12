import React, { Component } from "react"
import { Content } from 'bloomer'


export default class GameScore extends Component {
    // receives user score and active user 
    // and posts to api as well as gives message
    render() {
        return (
            <div className="card score">
                <div className="card-body">
                    <Content>
                        <h1> Congrats </h1>
                        <h3>You scored x out of x!</h3>
                    </Content>
                    </div>
                </div>
                )
            }
        }
