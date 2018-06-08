import React, { Component } from "react"
import { Columns, Column, Field, Control, Input, Button, Title, Image } from 'bloomer'
import 'bulma/css/bulma.css'
// import logo from "../img/Group.png"

export default class Register extends Component {
    // Then a registration form should be displayed where the user 
    // can enter an email address, first name, last name, and password
    // Set initial state
    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(stateToChange)
    }.bind(this)

    handleSignUp = function (e) {
        e.preventDefault()
        console.log(this.state.email)
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.password)

        // Create user in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show home view
                if (user.length) {
                    alert("We've already met, please go log in")
                    this.props.showView("login")

                    // User doesn't exist
                } else {
                    return fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: this.state.email,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            password: this.state.password
                        })
                    })
                        // Set local storage with newly created user's id and show home view
                        .then(r => r.json())
                        .then(newUser => {
                            debugger
                            this.props.setActiveUser(newUser.id)
                            this.props.showView("welcome")
                        })
                }
            })
    }.bind(this)

    render() {
        return (
            <Columns isCentered>
                <form onSubmit={this.handleSignUp} >
                <Column isSize="full">
                    <Field>
                        {/* <Column isSize="1/2"> */}
                        {/* <Image isSize="128x128" src={logo} /> */}
                        <Title isSize={2}>Sign Up!</Title>
                        {/* </Column> */}
                        <Control>
                            <Input onChange={this.handleFieldChange} isColor='success' placeholder='Email' type="email" id="email" />
                            <Input onChange={this.handleFieldChange} isColor='success' placeholder='First Name' type="text" id="firstName" />
                            <Input onChange={this.handleFieldChange} isColor='success' placeholder='Last Name' type="text" id="lastName" />
                            <Input onChange={this.handleFieldChange} isColor='success' placeholder='Password' type="password" id="password" />
                        </Control>
                        <Control>
                            <Button type="submit" isColor='primary' isOutlined>Sign Up!</Button>
                        </Control>
                    </Field>
                </Column >
                </form>
            </Columns>
        )
    }
}


