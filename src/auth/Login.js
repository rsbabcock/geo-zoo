import React, { Component } from "react"
import { Field, Control, Input, Button } from 'bloomer'
import 'bulma/css/bulma.css'
import logo from "../img/Group.png"
import './login.css'
import swal from 'sweetalert';
import audio from './elephant4.mp3'


class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()
        console.log(this.state.email)
        // Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show home view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("welcome")

                    // User doesn't exist
                } else { swal("", "Please go sign up!", "warning")}
            })
    }.bind(this)

    render() {
        return (
            <div className="loginContainer">
                    <div className="logoHolder">
                        <img src={logo} alt="brand" onClick={this.handleSound}/>
                        <audio ref="audio_tag" src={audio} autoPlay />
                    </div>
                    <form onSubmit={this.handleLogin}>
                        <Field>
                            <Control>
                                <Input isSize="large" onChange={this.handleFieldChange} isColor='primary' placeholder='Email' type="email" id="email" />
                                <Input style={{marginTop : 10}} isSize="large" onChange={this.handleFieldChange} isColor='primary' placeholder='Password' type="password" id="password" />
                            </Control>
                            <Control id="buttons">
                                    <Button 
                                    id="button__login"
                                    type="submit" 
                                    isColor='primary' 
                                    isOutlined 
                                    isSize="large">Log In</Button>
                                    <Button 
                                    isColor='primary' 
                                    id="page__register" 
                                    onClick={this.props.showView} 
                                    isOutlined 
                                    isSize="large">Sign Up!</Button>
                            </Control>
                        </Field>
                    </form>
                </div>
        )
    }
}

export default Login
