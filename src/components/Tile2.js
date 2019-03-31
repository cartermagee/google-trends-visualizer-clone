import React, {Component, useState} from 'react';
import '../styles/tile.css';
import '../styles/left.css';
import { TransitionGroup, CSSTransition, ReplaceTransition } from 'react-transition-group'
// import CardContainer from './CardContainer.js';
import Card from './Card.js';
// import PropTypes from 'prop-types';


class Tile extends Component {
    constructor(props) {
        super(props)
        // this.nextCard = this.nextCard.bind(this);
        // console.warn("props = ", props);
        
        this.state = {
            animal: '',
            animalIndex: '',
            color: '',
            colorIndex: '',
            id: '',
            appearCard: true,
            transition: props.transition,
            duration: 1000
        }
    }
    componentWillMount() {
        const animalIndex = Math.floor(Math.random()*this.props.animals.length);
        const animal = this.props.animals[animalIndex];
        const colorIndex = Math.floor(Math.random()*this.props.colors.length);
        const color = this.props.colors[colorIndex];
        const id = this.props.id;
        this.setState({
            animalIndex,
            colorIndex,
            animal, 
            color, 
            id, 
        });
        console.warn("id = ", id);
        console.warn("original animal = ", animal);
        console.warn("original color = ", color);
        console.warn("***********************");
        
    }
    componentWillUpdate(prevProps, prevState) {
        // console.warn("currentState = ", this.state);
        // console.warn("prevProps= ", prevProps);
        // console.warn("prevState= ", prevState);

        const {animals, colors} = prevProps;
        const animal = animals[Math.floor(Math.random()*animals.length)];
        // const newColors = colors.splice(this.state.animalIndex);
        const color = colors[Math.floor(Math.random()*colors.length)];
        // const newAnimals = animals.splice(this.state.animalIndex);
        console.warn("id = ", this.state.id);
        console.warn("new animal = ", animal);
        console.warn("new color = ", color);
        console.warn("***********************");
        this.setState({
            animal, 
            color,
            appearCard: true
        });

    }
    // nextCard() {
    //     console.warn("INNNN next card");
    //     const newAnimalArray = this.props.animals.splice(this.state.animalIndex);
    //     const animal = newAnimalArray[Math.floor(Math.random()*newAnimalArray.length)];
    //     if (animal === this.state.animal) {
    //         console.warn("same animal");
    //         // this.nextCard();
    //     }
    //     const newcolorArray = this.props.colors.splice(this.state.colorIndex);
    //     const color = newcolorArray[Math.floor(Math.random()*newcolorArray.length)];
    //     if (color === this.state.color) {
    //         console.warn("same color");
    //         // this.nextCard();
    //     }
    //      this.setState({ color, animal, appearCard: true });
    // }
    
    render(){
        const { animal, color, id, appearCard } = this.state;
        const newId = id+animal;
        return (
            <ReplaceTransition 
                in={appearCard}
                enter={appearCard}
            >
            <div>card1</div>
            <div>card2</div>
              {/* <Card color={color} animal={animal}>{ this.props.children }></Card>
              <Card color={color} animal={animal}>{ this.props.children }></Card> */}
            </ReplaceTransition>

        );
    }
}

// Tile.propTypes = {
//     animals: PropTypes.array.isRequired,
//     colors: PropTypes.array.isRequired
// }

export default Tile;
{/* <Card color={color} animal={animal}>{ this.props.children }></Card> */}
