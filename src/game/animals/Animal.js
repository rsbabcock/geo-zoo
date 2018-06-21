import React, { Component } from 'react'
// import { divs, div } from 'bloomer'
import { Box, Modal, 
    Button, ModalCard, Progress,
     ModalCardHeader, ModalBackground, 
     Delete, ModalCardTitle, ModalCardBody } from 'bloomer'
import './animal.css';
import '@fortawesome/fontawesome'


class Animal extends Component {
    state = {
        animalActive: false,
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
        return (
            <div className="gameContainer">
                    <div className="animalContainer">
                        <Box>
                        <div className="animal" id={this.props.animals[this.props.counter].continentId} draggable="true">
                            <img src={this.props.animals[this.props.counter].image} alt="animals" />
                        </div>
                        <div>
                            <Button isSize="medium" className="fact" id="animalFact" onClick={this.animalHandler} isOutlined> Facts </Button>
                            {/* Animal Modal Code */}
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
                                        <br/>
                                        <p>
                                           <strong>Diet:</strong>  {this.props.animals[this.props.counter].diet}
                                        </p>
                                        <br/>
                                        <a href={this.props.animals[this.props.counter].url} target="_blank"> 
                                        {this.props.animals[this.props.counter].url}
                                        </a>
                                    </ModalCardBody>
                                </ModalCard>
                            </Modal>
                        </div>
                        </Box>
                        {/* progress bar, takes a value and max value, which can be any variable */}
                        <Progress isColor='primary' value={this.props.counter} max={9}/>
                    </div>
                    {/* Beginning of Continents */}
                    <div className="contContainer">
                        {this.props.continents.map(c => (
                            <Box key={c.id} id={c.id} className={"continent"}>
                                <h6> {c.name} </h6>
                                <img id={c.id}
                                    src={c.image} alt="continents"
                                    onClick={() => this.props.gameHandler(this.props.animals[this.props.counter].continentId, c.id)}
                                />
                                <Button isSize="small" className="fact" id={"button__"+ c.id} onClick={() => this.continentHandler( "continent__"+c.id )} isOutlined> Facts </Button>
                                {/* Continent modal - bitch */}
                                <Modal id={"continent__"+c.id} key={c.id} value={this.state.value} >
                                    <ModalBackground />
                                    <ModalCard>
                                        <ModalCardHeader>
                                            <ModalCardTitle> {c.name} </ModalCardTitle>
                                            <Delete id={"delete__"+c.id} onClick={() => this.closeHandler("continent__"+c.id)}   />
                                        </ModalCardHeader>
                                        <ModalCardBody>
                                            <p> {c.fact} </p>
                                            <br/>
                                            <a href={c.url} target="_blank"> {c.url} </a>
                                        </ModalCardBody>
                                    </ModalCard>
                                </Modal>
                         </Box>
                        ))}
                </div>
            </div>
        )
    }
}

export default Animal