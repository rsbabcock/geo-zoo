import React, { Component } from "react"
import { Tabs, Tab, TabLink, TabList, Image} from 'bloomer'
import "./NavBar.css"
import logo from "../img/Group.png"



export default class NavBar extends Component {


    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <p className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</p>
        } else {
            return <p className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler}>Logout</p>
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
                        <TabLink>
                        <Image className="nav_logo" isSize="64x64" src={logo} onClick={this.props.viewHandler}/>
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
                            <p className="nav-link" id="nav__scoreList"
                        onClick={this.props.viewHandler} >Scores</p>
                            {/* <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon> */}
                        </TabLink>
                    </Tab>
                </TabList>
            </Tabs>
               
        )
    }
}
