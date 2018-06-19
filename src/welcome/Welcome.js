import React, { Component } from 'react'
import { Button } from 'bloomer'
import { Hero, HeroHeader, 
    HeroBody, Container, 
    Title, Box, Notification} from 'bloomer'
import words from "../img/words.png" 
import './welcome.css'   


class Welcome extends Component {

    // needs to receive: 
    // currentView, activeUser, UserScore
    // needs to manage:
    // play game function

    render() {
        return (
            <div>
                <Container isFluid style={{ margin: 15}}>
                <Hero style={{ padding: 15}} isColor="primary">
                    <Container>
                        <HeroHeader>
                            <Title style={{ textAlign : 'center'}}> Welcome to</Title>
                            <img src={words} alt="logo"/>
                        </HeroHeader>
                    </Container>
                    <HeroBody>
                        <Container  style={{ textAlign: 'center'}}>
                            <Box>
                            <Notification isColor="primary"> 
                            <Title isSize={5}>
                                <p>
                                To play,  click on the correct continent image for the animal. 
                                </p>
                                <br/>
                                <p>
                                You only have one guess before it moves to the next animal, 
                                </p>
                                <p>
                                so make sure to read the facts before you guess!
                                </p>
                                </Title>
                            <Title id="haveFun" isSize={3}>
                                Have fun and good luck!
                                </Title>
                                </Notification>
                                </Box>
                        </Container>
                    </HeroBody>
                    <Container style={{ textAlign: 'center'}}>
                            <Button id="play__game" onClick={this.props.showView} isSize="large" isOutlined isColor="light"> Play</Button>
                    </Container>
               </Hero>
               </Container>
               </div> 
        )   
    }
} 

export default Welcome