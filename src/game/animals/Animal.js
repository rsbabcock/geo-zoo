import React, { Component } from 'react'
import { Button, Columns, Column } from 'bloomer'
import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'



class Animal extends Component {
    // state = {
    //     counter : 0
    // }

    render() {
        return (
            <div>
                <Columns isCentered >
                    <Column >
                        <img width="80%" height="80%" src={this.props.animalImg[this.props.counter]} alt="animals" />
                    </Column>
                    <div> 
                        {this.props.continentImg.map(c => (
                        <div>
                            <img src={c} width="200" alt="continents" />
                        </div>
                    ))}
                    </div>
                <Column isSize="narrow" >
                    <i className="fa fa-chevron-right fa-5x" id="next" aria-hidden="true" onClick={this.props.gameCounter}></i>
                </Column>
                </Columns>
            </div>
        )
    }
}

export default Animal