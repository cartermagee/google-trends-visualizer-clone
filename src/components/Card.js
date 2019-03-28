import React, {Component} from 'react';
import TypeWriter from './TypeWriter.js';
// import '../styles/tile.css';


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animal: '',
            color: '',
            text: ''
        }
    }
    componentDidMount() {
        // this.handleType();
    }

    render(){
        console.warn("card this.props", this.props);
        
        const { color, animal } = this.props;
        return (
            <div className="card" style={{background: color}}>
            <TypeWriter animal={animal}/>
                {/* <p className="text">
                    <span className="fade-in">{ this.state.text }</span>
                    <span id="cursor"></span>
                </p>     */}
            </div> 
        );
    }
}

export default Card;