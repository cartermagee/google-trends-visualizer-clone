import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        }
      }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { animal, speed,  nextCard} = this.props;
    const { text } = this.state;

    setTimeout(() => {
      this.setState({
        text: animal.substring(0, text.length + 1),
      })
    }, speed)

    if (text === animal) {
      setTimeout( nextCard, 2500)
      return;
    }
    setTimeout(this.handleType, speed);
  };

    render() {
        const { color } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <a 
                    className="typing fade-in"
                    target="_blank" href="https://youtu.be/dQw4w9WgXcQ?t=42"
                    rel="noopener noreferrer"
                >
                    <span>{this.state.text}</span>
                    <span id="cursor"></span>
                </a>
            </div>
        );
    }
}
Card.propTypes = {

    animal: PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    nextCard: PropTypes.func.isRequired,
    speed:PropTypes.number.isRequired,
}
    export default Card;