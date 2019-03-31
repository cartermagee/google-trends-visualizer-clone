import React from "react";
import '../styles/typeWriter.css';
import { clearInterval } from "timers";

class TypeWriter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        loopNum: 0,
      }
    }
  
    componentDidMount() {
      this.interval = setTimeout(this.handleType(), 2000);
    }

    componentWillUnmount() {
      clearTimeout(this.interval);
    }
  
    handleType = () => {
      const { animal } = this.props;
      const { text } = this.state;
      
      setTimeout(() => {
      this.setState({
        text: animal.substring(0, text.length + 1),
        typingSpeed: 150
      })
      }, 500)
  

    if (text === animal){
      console.log("DONE");
      // setTimeout(this.props.nextCard(),3000)
      return;
    }
      setTimeout(this.handleType, 150);
    };

    render() {    
      return (
        <p className="text fade-in">
          <span >{ this.state.text }</span>
          <span id="cursor"></span>
        </p>
      );
      
    }
  }
  
  export default TypeWriter;
