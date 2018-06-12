import React, { Component } from 'react'
import {
    Modal, Delete,
    ModalCard, ModalCardHeader,
    ModalBackground,
    ModalCardTitle, ModalCardBody
} from 'bloomer'

class Fact extends Component {


    render() {
        return (
            <Modal key={this.props.c.id} isActive={this.props.isActive}>
                                    <ModalBackground />
                                    <ModalCard>
                                        <ModalCardHeader>
                                            <ModalCardTitle> {this.props.c.name} </ModalCardTitle>
                                            <Delete onClick={this.props.continentHandler} />
                                        </ModalCardHeader>
                                        <ModalCardBody>
                                            <p> {this.props.c.fact} </p>
                                            <p> {this.props.c.url} </p>
                                        </ModalCardBody>
                                    </ModalCard>
                                </Modal>
        )
    }
}


export default Fact