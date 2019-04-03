import React, {Component} from 'react';
// import React from 'react';
import TypeWriter from './TypeWriter.js';
// import '../styles/tile.css';

class Card extends Component {
    render() {
        const { color, animal, nextCard } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <TypeWriter animal={animal} nextCard={nextCard}/>
            </div> 
        );

    }
}
export default Card;