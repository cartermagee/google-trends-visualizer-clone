import React from "react";
import '../styles/typeWriter.css';

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      start: 0,
    }
  }

  componentDidMount() {
    if (this.props.animal) {
      console.warn("animal present");

      this.handleType();

    }
  }

  componentWillUnmount() {
    console.warn("UNMOUNTED");

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
      console.log("DONE");
      // setTimeout( nextCard, 2500)
      return;
    }
    setTimeout(this.handleType, speed);
  };

  handleClick() {
    console.warn("CLICKED INNNNN");

    setTimeout(this.props.nextCard(), 3000)
    // this.setState({text: "left"});
  }
  render() {
    return (
      <p className="text fade-in">
        <button onClick={() => this.handleClick()}>click</button>

        <span >{this.state.text}</span>
        <span id="cursor"></span>
      </p>
    );

  }
}

export default TypeWriter;
