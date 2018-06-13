import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Hero, HeroHeader, 
    HeroBody, HeroFooter, Container, 
    Title, Columns, Column} from 'bloomer'
import words from "../img/words.png"    


class Welcome extends Component {

    // needs to receive: 
    // currentView, activeUser, UserScore
    // needs to manage:
    // play game function

    render() {
        return (
            <div>
                <Container style={{ margin: 15}}>
                <Hero style={{ padding: 15}} isColor="primary">
                    <Container>
                        <HeroHeader isSize="1/2">
                            <Title style={{ textAlign: 'center'}}> Welcome to <br/> <img src={words}/></Title>
                        </HeroHeader>
                    </Container>
                    <HeroBody>
                        <Container  style={{ textAlign: 'center'}}>
                            <Title isSize={4}>
                                To play,  click on the correct continent image for the animal. You only have one guess before it moves to the next animal, so make sure to read the facts before you guess!
                                </Title>
                            <br />
                            <Title isSize={4}>
                                Have fun and good luck!
                                </Title>
                        </Container>
                    </HeroBody>
                    <Container>
                            <Button isSize="large" id="play__game" onClick={this.props.showView}> Play </Button>
                    </Container>
               </Hero>
               </Container>
               </div> 
        )   
    }
} 

export default Welcome