import React, {Component} from 'react';

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

  handleClick() {
    setTimeout(this.props.nextCard(), 3000);
  }

    render() {
        const { color } = this.props;
        return (
            <div className="card" style={{background: color}}>
                <a 
                className="typing fade-in"
                target="_blank" href="https://youtu.be/dQw4w9WgXcQ?t=42"
                rel="noopener noreferrer"
                >
                    {/* <button onClick={() => this.handleClick()}>click</button> */}
                    <span>{this.state.text}</span>
                    <span id="cursor"></span>
                </a>
            </div>
        );
    }
}
export default Card;