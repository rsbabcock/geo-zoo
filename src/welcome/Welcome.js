import React, { Component } from 'react'
import { Columns, Column, Button } from 'bloomer'


class Welcome extends Component {

    // needs to receive: 
    // currentView, activeUser, UserScore
    // needs to manage:
    // play game function

    render() {
        return (
            <div>
                <Columns isCentered>
                    <Column isSize="1/2">
                        <h1> Welcome to GeoZoo</h1>
                        <h3> Instructions </h3>
                        <Button id="play__game" onClick={this.props.showView}> Play </Button>
                    </Column>
                </Columns>
            </div> 
        )
    } 
}    
        
export default Welcome