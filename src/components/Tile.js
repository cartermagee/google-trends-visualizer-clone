import React, { Component } from 'react';
import '../styles/tile.css';
import '../styles/transitions.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Card from './Card.js';
import PropTypes from 'prop-types';


class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: 1000,
            cards: [],
            card: {}
        }
    }
    componentWillMount() {
        const { animals, colors, id, transitions, typingSpeed } = this.props;
        const currAnimalIndex = Math.floor(Math.random()*animals.length);
        const currAnimal = animals[currAnimalIndex];
        
        const currColorIndex = Math.floor(Math.random()*colors.length);
        const currColor = colors[currColorIndex];
        
        const currId = id+" "+currAnimal;
        const currentSpeed = typingSpeed[Math.floor(Math.random()*typingSpeed.length)]

        const currTransition = transitions[Math.floor(Math.random()*transitions.length)];
       

        let currentCard = {
            animal: currAnimal,
            animalIndex: currAnimalIndex,
            color: currColor,
            colorIndex: currColorIndex,
            id: currId,
            transition: currTransition,
            speed:currentSpeed
        };
        
        this.setState({ card: currentCard, id: id });
    }

    nextCard = () => {
        const { animals, colors, id, transitions, typingSpeed } = this.props;

        let currentCard = {...this.state.card};
        
        let nextAnimalIndex = Math.floor(Math.random()*animals.length);
        
        if (nextAnimalIndex === currentCard.animalIndex && nextAnimalIndex !== 0) {
            nextAnimalIndex = nextAnimalIndex - 1;
        } else if (nextAnimalIndex === 0){ 
            nextAnimalIndex = nextAnimalIndex + 2;
        }
        
        const nextAnimal = animals[nextAnimalIndex];

        
        const nextColorIndex = Math.floor(Math.random()*colors.length);
        const nextColor = colors[nextColorIndex];
        
        
        const nextId = id+" "+nextAnimal;

        const nextTransition = transitions[Math.floor(Math.random()*transitions.length)];
        const nextSpeed = typingSpeed[Math.floor(Math.random()*typingSpeed.length)]
        
        let nextCard = {
            animal: nextAnimal,
            animalIndex: nextAnimalIndex,
            color: nextColor,
            colorIndex: nextColorIndex,
            id: nextId,
            transition: nextTransition,
            speed: nextSpeed
        };
        this.setState({ card: nextCard });

    }
    
    render(){
        const { card } = this.state;
        return (
            <TransitionGroup component='div' id={card.id} className='tile'>
                <CSSTransition
                    in={true}
                    key={card.id}
                    timeout={500}
                    classNames={card.transition}
                    unmountOnExit={true}
                    mountOnEnter={true}
                > 
                    <Card animal={card.animal} color={card.color} speed={card.speed} nextCard={this.nextCard}/>
                </CSSTransition>
            </TransitionGroup>

        );
    }
}

Tile.propTypes = {
    animals: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    transitions: PropTypes.array.isRequired,
    typingSpeed: PropTypes.array.isRequired
}

export default Tile;
