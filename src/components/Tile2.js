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
            animal: '',
            animalIndex: '',
            color: '',
            colorIndex: '',
            id: '',
            appearCard: true,
            transition: props.transition,
            duration: 1000,
            cards: []

        }
    }
    componentWillMount() {
        
        const currAnimalIndex = Math.floor(Math.random()*this.props.animals.length);
        const currAnimal = this.props.animals[currAnimalIndex];
        
        const currColorIndex = Math.floor(Math.random()*this.props.colors.length);
        const currColor = this.props.colors[currColorIndex];
        
        const currId = this.props.id+currAnimal;

        const currTransition = this.props.transitions[Math.floor(Math.random()*this.props.transitions.length)];
        const nextTransition = this.props.transitions[Math.floor(Math.random()*this.props.transitions.length)];

        let nextAnimalIndex = Math.floor(Math.random()*this.props.animals.length);
        if (nextAnimalIndex === currAnimalIndex && nextAnimalIndex != 0) {
            nextAnimalIndex = nextAnimalIndex - 1;
        } else if (nextAnimalIndex === 0){ 
             nextAnimalIndex = nextAnimalIndex + 1;
        }

        const nextAnimal = this.props.animals[nextAnimalIndex];
        
        let nextColorIndex = Math.floor(Math.random()*this.props.colors.length);
        if (nextColorIndex === currColorIndex) {
            nextColorIndex = nextColorIndex - 1;
        } else if (nextColorIndex === 0){ 
            nextColorIndex = nextColorIndex + 1;
       }
        const nextColor = this.props.colors[nextColorIndex];
        
        const nextId = this.props.id+nextAnimal;
        
        let cards = [];
        let currentCard = {
            animal: currAnimal,
            color: currColor,
            id: currId,
            transition: currTransition
        };
        
        let nextCard = {
            animal: nextAnimal,
            color: nextColor,
            id: nextId,
            transition: nextTransition
        };
        cards.push(currentCard, nextCard);
        console.warn("cards = ", cards);
        console.warn("***********************");
        

        this.setState({ cards });
    }

    componentWillUpdate(prevProps, prevState) {
        console.warn("currentState = ", this.state);
        console.warn("prevProps= ", prevProps);
        console.warn("prevState= ", prevState);

        // const {animals, colors} = {...prevProps.animals};
        // const animal = animals[Math.floor(Math.random()*animals.length)];
        // // const newColors = colors.splice(this.state.animalIndex);
        // const color = colors[Math.floor(Math.random()*colors.length)];
        // // const newAnimals = animals.splice(this.state.animalIndex);
        // console.warn("id = ", this.state.id);
        // console.warn("new animal = ", animal);
        // console.warn("new color = ", color);
        // console.warn("***********************");
        // this.setState({
        //     animal, 
        //     color,
        //     appearCard: true
        // });

    }
    shouldComponentUpdate(props) {
        console.warn("prooooops= ", props);

    }
    componentWillReceiveProps(props) {
        console.warn("prooooops= ", props);

    }
    nextCard() {
        console.warn("INNNN next card");
        // const newAnimalArray = this.props.animals.splice(this.state.animalIndex);
        // const animal = newAnimalArray[Math.floor(Math.random()*newAnimalArray.length)];
        // if (animal === this.state.animal) {
        //     console.warn("same animal");
        //     // this.nextCard();
        // }
        // const newcolorArray = this.props.colors.splice(this.state.colorIndex);
        // const color = newcolorArray[Math.floor(Math.random()*newcolorArray.length)];
        // if (color === this.state.color) {
        //     console.warn("same color");
        //     // this.nextCard();
        // }
        //  this.setState({ color, animal, appearCard: true });
    }
    
    render(){
    //     const { animal, color, id } = this.state;
    //     const newId = id+animal;
        return (
            <TransitionGroup component='div'
                className='tile'
                // transitionName='slide'
                // transitionEnterTimeout={2000}
                // transitionLeaveTimeout={2000}
                // transitionAppear={false}
            >
              <Card color={'#000'} animal={"goat"} nextCard={this.nextCard}></Card>
            </TransitionGroup>

        );
    }
}

// Tile.propTypes = {
//     animals: PropTypes.array.isRequired,
//     colors: PropTypes.array.isRequired
// }

export default Tile;
