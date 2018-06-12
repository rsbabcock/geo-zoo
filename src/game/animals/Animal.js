import React, { Component } from 'react'
import { Columns, Column } from 'bloomer'
import { Modal, Button, ModalCard, ModalCardHeader, ModalBackground, Delete, ModalCardTitle, ModalCardBody } from 'bloomer'
// import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'
import Fact from './Modal'
// import $ from ‘jquery’

class Animal extends Component {
    state = {
        isActive: false,
        animalActive: false
        // continentActive: false,
    }


    animalHandler = (e) => {
        this.setState({
            animalActive: !this.state.animalActive
        })
    }

    // continentHandler = (id) => {
    //     if( id === $("#continent__id")) {
    //         this.setState({
    //             isActive : true
    //         })
    //     }
    //     // });
    // }
    


    render() {
        // const continentTitle = this.props.continents.map(c => if(c.id < 3 ){return c} )
        return (
            <div>
                <Columns isCentered >
                    <Column>
                        <div className="animal" id={this.props.animals[this.props.counter].continentId} draggable="true">
                            <h6> {this.props.animals[this.props.counter].name} </h6>
                            <img width="80%" height="80%" src={this.props.animals[this.props.counter].image} alt="animals" />
                        </div>
                        <div>
                            <Button id="animalFact" onClick={this.animalHandler} isOutlined> Facts </Button>
                            <Modal isActive={this.state.animalActive}>
                                <ModalBackground />
                                <ModalCard>
                                    <ModalCardHeader>
                                        <ModalCardTitle>{this.props.animals[this.props.counter].name}</ModalCardTitle>
                                        <Delete onClick={this.animalHandler} />
                                    </ModalCardHeader>
                                    <ModalCardBody>
                                        <p>
                                            {this.props.animals[this.props.counter].fact}
                                        </p>
                                        <p>
                                            {this.props.animals[this.props.counter].diet}
                                        </p>
                                        <a href={this.props.animals[this.props.counter].url} target="_blank"> 
                                        {this.props.animals[this.props.counter].url}
                                        </a>
                                    </ModalCardBody>
                                </ModalCard>
                            </Modal>
                        </div>
                    </Column>
                    <Column >
                        {this.props.continents.map(c => (
                            <div key={c.id} id={c.id} className="continent">
                                <h6> {c.name} </h6>
                                <img id={c.id}
                                    src={c.image} width="200" alt="continents"
                                    onClick={() => this.props.gameHandler(this.props.animals[this.props.counter].continentId, c.id)}
                                />
                                <Button id={"button__"+ c.id} onClick={() => this.continentHandler(c.id )} isOutlined> Facts </Button>
                                <Fact c={c} id={"continent__"+ c.id} isActive={this.state.continentActive} continentHandler={this.continentHandler}/>
                        </div>
                        ))}
                    </Column>
                    <Column isSize="narrow">
                        <div>
                            <i className="fa fa-chevron-right fa-5x" id="next_gameScore" aria-hidden="true" onClick={this.props.gameCounter}></i>
                        </div>
                    </Column>
                </Columns>
            </div>
        )
    }
}

export default Animal