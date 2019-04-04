import React, {Component, useState} from 'react';
import '../styles/tile.css';
import '../styles/left.css';
import { TransitionGroup, CSSTransition, ReplaceTransition } from 'react-transition-group'
import Card from './Card.js';
// import PropTypes from 'prop-types';


class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appearCard: true,
            duration: 1000,
            cards: [],
            card: {}

        }
    }
    componentWillMount() {
        
        const currAnimalIndex = Math.floor(Math.random()*this.props.animals.length);
        const currAnimal = this.props.animals[currAnimalIndex];
        
        const currColorIndex = Math.floor(Math.random()*this.props.colors.length);
        const currColor = this.props.colors[currColorIndex];
        
        const currId = this.props.id+currAnimal;
        const currentSpeed = this.props.typingSpeed[Math.floor(Math.random()*this.props.typingSpeed.length)]

        const currTransition = this.props.transitions[Math.floor(Math.random()*this.props.transitions.length)];
       

        let currentCard = {
            animal: currAnimal,
            animalIndex: currAnimalIndex,
            color: currColor,
            colorIndex: currColorIndex,
            id: currId,
            transition: currTransition,
            speed:currentSpeed
        };
        
        this.setState({ card: currentCard });
    }

    componentWillUpdate(prevProps, prevState) {
        console.warn("currentState = ", this.state);
        console.warn("prevProps= ", prevProps);
        console.warn("prevState= ", prevState);

    }

    componentWillReceiveProps(props) {
        console.warn("prooooops= ", props);

    }
    nextCard = () => {
        let currentCard = {...this.state.card};
        console.warn("INNNN prev card", currentCard);               
        
        let nextAnimalIndex = Math.floor(Math.random()*this.props.animals.length);
        
        if (nextAnimalIndex === currentCard.animalIndex && nextAnimalIndex !== 0) {
            nextAnimalIndex = nextAnimalIndex - 1;
        } else if (nextAnimalIndex === 0){ 
            nextAnimalIndex = nextAnimalIndex + 1;
        }
        
        const nextAnimal = this.props.animals[nextAnimalIndex];

        
        let nextColorIndex = Math.floor(Math.random()*this.props.colors.length);
        if (nextColorIndex === currentCard.colorIndex && nextColorIndex !== 0) {
            nextColorIndex = nextColorIndex - 1;
        } else if (nextColorIndex === 0){ 
            nextColorIndex = nextColorIndex + 1;
        }
        const nextColor = this.props.colors[nextColorIndex];
        
        
        const nextId = this.props.id+nextAnimal;

        const nextTransition = this.props.transitions[Math.floor(Math.random()*this.props.transitions.length)];
        const nextSpeed = this.props.typingSpeed[Math.floor(Math.random()*this.props.typingSpeed.length)]
        
        let nextCard = {
            animal: nextAnimal,
            animalIndex: nextAnimalIndex,
            color: nextColor,
            colorIndex: nextColorIndex,
            id: nextId,
            transition: nextTransition,
            speed: nextSpeed
        };
        console.warn("INNNN nextCard", nextCard);               
        this.setState({ card: nextCard });

    }
    
    render(){
        const { appearCard, card } = this.state;
        // const newId = id+animal;
    console.warn(this.state);
        // const childFactory = 
        return (
            <TransitionGroup component='div' className='tile'>
                <CSSTransition
                    key={card.id}
                    timeout={2000}
                    classNames='right'
                    unmountOnExit
                > 
                    <Card animal={card.animal} color={card.color} speed={card.speed} nextCard={this.nextCard}/>
                </CSSTransition>
            </TransitionGroup>

        );
    }
}

// Tile.propTypes = {
//     animals: PropTypes.array.isRequired,
//     colors: PropTypes.array.isRequired
// }

export default Tile;
