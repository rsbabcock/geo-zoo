import React, { Component } from "react"
import { Tabs, Tab, TabLink, TabList} from 'bloomer'
import "./NavBar.css"


export default class NavBar extends Component {


    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
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
                        <this.LoginLogout />
                            {/* <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon> */}
                        </TabLink>
                    </Tab>
                </TabList>
            </Tabs>
               
        )
    }
}
