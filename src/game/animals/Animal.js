import React, { Component } from 'react'
import { Button, Columns, Column } from 'bloomer'
import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'

class Animal extends Component {
    gameHandler = function (e) {
        // event that checks if the continent clicked is
        //  correct one for the current animal
        // if correct then alerts user and
        // adds score 
        const animalDiv = querySelector("#animal")
        if(e.target.id === this.props.animals.contientId)
    }

    render() {
        // const continentTitle = this.props.continents.map(c => if(c.id < 3 ){return c} )
        return (
            <div>
                <Columns isCentered >
                    <Column>
                    <div className="animal__{this.props.animals[this.props.counter].id}" draggable="true">
                        <h6> {this.props.animals[this.props.counter].name} </h6>
                        <img width="80%" height="80%" src={this.props.animals[this.props.counter].image} alt="animals" />
                    </div>
                    </Column>
                    <Column >
                        <div> {this.props.continents.map( c => (
                            <div id={c.id} className="continent">
                                <h6> {c.name} </h6>
                                <img src={c.image} width="200" alt="continents" /> 
                            </div>
                            ))} 
                        </div>
                    </Column>
                    <Column isSize="narrow">
                        <i className="fa fa-chevron-right fa-5x" id="next" aria-hidden="true" onClick={this.props.gameCounter}></i>
                    </Column>
                </Columns>
            </div>
        )
    }
}

export default Animal