import React, { Component } from "react"
import { Tabs, Tab, TabLink, TabList, Image, Title} from 'bloomer'
import "./NavBar.css"
import logo from "../img/Group.png"



export default class NavBar extends Component {


    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <Title className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</Title>
        } else {
            return <Title className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler}>Logout</Title>
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <Tabs>
                <TabList>
                <Tab>
                        <TabLink >
                        <Image id="nav_welcome" onClick={()=>this.props.viewHandler("welcome")} isSize="64x64" src={logo} />
                            {/* <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon> */}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink>
                        <this.LoginLogout />
                            {/* <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon> */}
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink  >
                            <Title className="nav-link" id="nav__scoreList"
                        onClick={this.props.viewHandler} >Scores</Title>
                            {/* <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon> */}
                        </TabLink>
                    </Tab>
                </TabList>
            </Tabs>
               
        )
    }
}
