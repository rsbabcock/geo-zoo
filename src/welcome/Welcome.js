import React, { Component } from 'react'
import { Columns, Column, Button } from 'bloomer'
import { HeroFooter } from 'bloomer/lib/layout/Hero/HeroFooter';
import { HeroFooter } from 'bloomer/lib/layout/Hero/HeroFooter';
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader';


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
                            <h3> To play,  click on the correct continent image for the animal. You only have one guess before it moves to the next animal, so make sure to read the facts before you guess!

                            Have fun and good luck!
                             </h3>
                            <Button id="play__game" onClick={this.props.showView}> Play </Button>
                        </Column>
                    </Columns >
            </div>
        )
    }
}

export default Welcome