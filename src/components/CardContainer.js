import React, {Component} from 'react';
// import React from 'react';
import Card from './Card.js';

import TypeWriter from './TypeWriter.js';
// import '../styles/tile.css';

class CardContainer extends Component {

    render() {
        const {color, animal} = this.props;
        
        return (
            <div className="card">
                <Card color={color} animal={animal}/>
                <Card color={color} animal={animal}/>
            </div> 
        );
    }
}

export default CardContainer;