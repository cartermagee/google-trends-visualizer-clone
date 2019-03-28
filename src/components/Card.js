import React, {Component} from 'react';
// import TypeWriter from './TypeWriter.js';
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
        this.handleType();
    }

    handleType = () => {
        const { animal } = this.props;
        const { text } = this.state;
        this.setState({
          text: animal.substring(0, text.length + 1),
          typingSpeed: 150
        });
    
  
      if (text === animal){
        console.log("DONE");
        setTimeout(this.props.nextCard(), 5000);
        
        return;
      }
        setTimeout(this.handleType, 150);
      };
    render(){
        console.warn("card this.props", this.props);
        
        const { color } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <p className="text">
                    <span className="fade-in">{ this.state.text }</span>
                    <span id="cursor"></span>
                </p>    
            </div> 
        );
    }
}

export default Card;