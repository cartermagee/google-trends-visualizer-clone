import React, {Component} from 'react';
import '../styles/tile.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Card from './Card.js';
import PropTypes from 'prop-types';


class Tile extends Component {
    constructor(props) {
        super(props)
        this.nextCard = this.nextCard.bind(this)

        this.state = {
            animal: '',
            animalIndex: '',
            color: '',
            colorIndex: '',
            id: '',
            appearCard: false
        }
    }
    componentWillMount() {
        const animalIndex = Math.floor(Math.random()*this.props.animals.length);
        
        const animal = this.props.animals[animalIndex];
 
        const colorIndex = Math.floor(Math.random()*this.props.colors.length);
        
        const color = this.props.colors[colorIndex];
        
        const id = this.props.id;
        this.setState({animal, color, id, appearCard: true});
    }

    nextCard() {
        console.warn("INNNN next card");
        // this.setState({appearCard: false});
        const newAnimalArray = this.props.animals.splice(this.state.animalArray);
        const animal = newAnimalArray[Math.floor(Math.random()*newAnimalArray.length)];
        if (animal === this.state.animal) {
            console.warn("same animal");
            // this.nextCard();
        }
        const newcolorArray = this.props.colors.splice(this.state.colorArray);
        const color = newcolorArray[Math.floor(Math.random()*newcolorArray.length)];
        if (color === this.state.color) {
            console.warn("same color");
            // this.nextCard();
        }
         this.setState({ color, animal, appearCard: true });
    }
    
    render(){
        const { animal, color, id, appearCard } = this.state;
        const newId = id+animal;
        
        return (
            <div className='tile'>
                <TransitionGroup component={null}>
                    <CSSTransition
                        in={appearCard}
                        appear={true}
                        key={newId}
                        timeout={5000}
                        classNames="slide"
                        >
                        <Card id={id} animal={animal} color={color} nextCard={this.nextCard} />

                    </CSSTransition>
                </TransitionGroup> 
            </div>
        );
    }
}

Tile.propTypes = {
    animals: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired
}

export default Tile;