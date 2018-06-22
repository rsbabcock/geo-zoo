import React, { Component } from 'react'
import audio from './buzzer.mp3'

export default class Buzzer extends Component{

    render() {
        return (
            <div>
            <audio ref="audio_tag" src={audio} autoPlay/>
            </div>
        )
    }
}