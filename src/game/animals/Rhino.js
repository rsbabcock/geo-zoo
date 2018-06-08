import React, { Component } from 'react'
import { Image, Button, Columns, Column } from 'bloomer'
import { Icon } from 'bloomer/lib/elements/Icon';
import '@fortawesome/fontawesome'



class Rhino extends Component {

    // needs to receive: 
    // animals and continents
    // needs to manage:
    // drag?
    // <Rhino animals={this.state.animals} 
    // animalImg={this.state.animalImg} 
    // continents={this.state.continents}
    // continentImg={this.state.continentImg} 
    // key={this.uniqueKey++}/>

    render() {
        return (
            <div>
                <Columns isCentered >
                    <Column >
                        <img width="80%" height="80%" src={this.props.animalImg[0]} alt="animals" />
                    </Column>
                    <div> {this.props.continentImg.map(c => (
                        <div>
                            <img src={c} width="200" alt="continents" />
                        </div>
                    ))}
                    </div>
                </Columns>
                <div >
                    <i class="fa fa-chevron-right fa-5x" id="next__dog" aria-hidden="true" onClick={this.props.showView}></i>
                </div>
            </div>
        )
    }
}

export default Rhino