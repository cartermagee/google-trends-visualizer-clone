import React, {Component} from 'react';
import TypeWriter from './TypeWriter.js';
import '../styles/tile.css';


class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animal: '',
            nextAnimal: '',
            color: '',
            nextColor: ''
        }
    }
    componentWillMount() {
        const animal = this.props.animals[Math.floor(Math.random()*this.props.animals.length)];
        const color = this.props.colors[Math.floor(Math.random()*this.props.colors.length)];
        const nextAnimal = this.props.animals[Math.floor(Math.random()*this.props.animals.length)];
        const nextColor = this.props.colors[Math.floor(Math.random()*this.props.colors.length)];        

        this.setState({animal, color, nextAnimal, nextColor})
    }
    animateTiles(){
        const { animal, color } = this.state;
        
        return ( <div className="card" style={{background: color}}>
                    <TypeWriter animal={animal}/>
                </div> );
    }
    render(){
        return (
            <div className="tile">
                {this.animateTiles()}
            </div>
        );
    }
}

export default Tile;