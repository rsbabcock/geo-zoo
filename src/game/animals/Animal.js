import React, { Component } from 'react'
import { Button, Columns, Column } from 'bloomer'
import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'
// import africa from "../img/aImg/africa.png"
// import asia from "../img/aImg/asia.png"
// import nAmerica from "../img/aImg/northamerica.png"



class Animal extends Component {
    // state = {
    //     counter : 0
    // }

    render() {
        // const continentTitle = this.props.continents.map(c => if(c.id < 3 ){return c} )
        return (
            <div>
                <Columns isCentered >
                    <Column >
                        <img width="80%" height="80%" src={this.props.animalImg[this.props.counter]} alt="animals" />
                    </Column>
                    <Column >
                        <div> {this.props.continents.map( c => (
                            <div>
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