import React, { Component } from 'react'
import { Columns, Column } from 'bloomer'
import { Modal, ModalCard, ModalCardHeader, ModalBackground, Delete, ModalCardTitle, ModalCardBody, ModalCardFooter, } from 'bloomer'
// import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'
import Fact from './Modal'

class Animal extends Component {
    state = {
        isActive: false
    }


    modalHandler = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }



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
                            <button onClick={this.modalHandler}> Facts </button>
                            <Modal isActive={this.state.isActive}>
                                <ModalBackground />
                                <ModalCard>
                                    <ModalCardHeader>
                                        <ModalCardTitle>{this.props.animals[this.props.counter].name}</ModalCardTitle>
                                        <Delete onClick={this.modalHandler} />
                                    </ModalCardHeader>
                                    <ModalCardBody>
                                        <p>
                                            {this.props.animals[this.props.counter].fact}
                                        </p>
                                        <p>
                                            {this.props.animals[this.props.counter].diet}
                                        </p>
                                        <p>
                                            {this.props.animals[this.props.counter].url}
                                        </p>
                                    </ModalCardBody>
                                </ModalCard>
                            </Modal>
                        </div>
                    </Column>
                    <Column >
                        <div> {this.props.continents.map(c => (
                            <div id={c.id} className="continent"
                                onClick={() => this.props.gameHandler(this.props.animals[this.props.counter].continentId, c.id)}>
                                <h6> {c.name} </h6>
                                <img src={c.image} width="200" alt="continents" />
                            </div>
                        ))}
                        </div>
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