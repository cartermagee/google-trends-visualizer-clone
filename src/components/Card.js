import React, {Component} from 'react';
// import React from 'react';
import TypeWriter from './TypeWriter.js';
// import '../styles/left.css';

class Card extends Component {
    render() {
        const { animal, color, speed, nextCard } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <TypeWriter animal={animal} color={color} speed={speed} nextCard={nextCard}/>
            </div> 
        );

    }
}
export default Card;