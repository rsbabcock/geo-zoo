import React, { Component } from "react"
import "./NavBar.css"


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = (e) => {
        if (e.charCode === 13) {
            this.props.searchHandler(this.state.searchTerms)
            this.setState({ searchTerms: "" })
        }
    }

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
            <nav>
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" onClick={this.props.viewHandler} href="#">
                    {/* <img id="nav__home" src={yak} style={{ height: `50px` }} /> */}
                </a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link"
                            onClick={this.props.viewHandler} href="#">
                            {/* <img id="navimg"
                                 onClick={()=>$(".profileMenu").slideToggle(333)}
                                 src={profilepic} style={{ height: `30px` }} /> */}
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
            </nav>
        )
    }
}
