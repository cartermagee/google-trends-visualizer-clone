import React from "react";
import '../styles/typeWriter.css';

class TypeWriter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        loopNum: 0,
      }
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { animal } = this.props;
      const { text } = this.state;
      console.warn("this.props typewriter = ", this.props);
      console.warn("this.state typewriter = ", this.state);
      
      this.setState({
        text: animal.substring(0, text.length + 1),
        typingSpeed: 150
      });
  

    if (text === animal){
      console.log("DONE");
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
