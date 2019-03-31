// import React, {Component} from 'react';
import React from 'react';
import TypeWriter from './TypeWriter.js';
// import '../styles/tile.css';


const Card = ({color, animal}) =>  {
        // const { color, animal } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <TypeWriter animal={animal}/>
            </div> 
        );
    }

export default Card;