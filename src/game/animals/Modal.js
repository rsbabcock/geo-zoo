import React, { Component } from 'react'
import { Modal, Delete, 
    ModalCard, ModalCardHeader,
    ModalBackground, 
    ModalCardTitle, ModalCardBody, 
    ModalCardFooter, } from 'bloomer'

class Fact extends Component {


    render() {
        return (
            <Modal {...this.props.show}>
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>{this.props.animal.name}</ModalCardTitle>
                        <Delete onClose={this.props.modalHandler}/>
                    </ModalCardHeader>
                    <ModalCardBody>
                        <p>
                            {this.props.animal.fact}
                        </p>
                        <p>
                            {this.props.animal.diet}
                        </p>
                        <p>
                            {this.props.animal.url}
                        </p>
                    </ModalCardBody>
                </ModalCard>
            </Modal>
        )
    }
}


export default Fact