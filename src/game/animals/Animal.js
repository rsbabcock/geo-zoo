import React, { Component } from 'react'
import { Columns, Column } from 'bloomer'
import { Box, Modal, Button, ModalCard, ModalCardHeader, ModalBackground, Delete, ModalCardTitle, ModalCardBody } from 'bloomer'
import './animal.css';
import '@fortawesome/fontawesome'


class Animal extends Component {
    state = {
        animalActive: false,
        // isActive: false
        // continentActive: false,
    }

    animalHandler = (e) => {
        this.setState({
            animalActive: !this.state.animalActive
        })
    }

    continentHandler = function (id) {
        // debugger
        // console.log($(`#${id}`).attr("isActive"))
        const thing = document.getElementById(id)
        thing.classList.add('is-active')

    }
    
    closeHandler = function(id){
        const close = document.getElementById(id)
        close.classList.remove('is-active')
    }

    render() {
        // const continentTitle = this.props.continents.map(c => if(c.id < 3 ){return c} )
        return (
            <div>
                <Columns isCentered >
                    <Column isSize="1/2">
                        <Box>
                        <div className="animal" id={this.props.animals[this.props.counter].continentId} draggable="true">
                            {/* <h6> {this.props.animals[this.props.counter].name} </h6> */}
                            <img width="80%" height="80%" src={this.props.animals[this.props.counter].image} alt="animals" />
                        </div>
                        <div>
                            <Button className="fact" id="animalFact" onClick={this.animalHandler} isOutlined> Facts </Button>
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
                        </Box>
                    </Column>
                    </Columns>
                    {/* Beginning of Continents */}
                    <Columns isCentered>
                        {this.props.continents.map(c => (
                    <Column isSize="1/3" >
                            <Box key={c.id} id={c.id} className="continent">
                                <h6> {c.name} </h6>
                                <img id={c.id}
                                    src={c.image} alt="continents"
                                    onClick={() => this.props.gameHandler(this.props.animals[this.props.counter].continentId, c.id)}
                                />
                                <Button className="fact" id={"button__"+ c.id} onClick={() => this.continentHandler( "continent__"+c.id )} isOutlined> Facts </Button>
                                <Modal id={"continent__"+c.id} key={c.id} value={this.state.value} >
                                    <ModalBackground />
                                    <ModalCard>
                                        <ModalCardHeader>
                                            <ModalCardTitle> {c.name} </ModalCardTitle>
                                            <Delete id={"delete__"+c.id} onClick={() => this.closeHandler("continent__"+c.id)}   />
                                        </ModalCardHeader>
                                        <ModalCardBody>
                                            <p> {c.fact} </p>
                                            <p> {c.url} </p>
                                        </ModalCardBody>
                                    </ModalCard>
                                </Modal>
                        </Box>
                    </Column>
                        ))}
  
                </Columns>
            </div>
        )
    }
}

export default Animal