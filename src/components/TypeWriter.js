import React from "react";
import '../styles/typeWriter.css';

class TypeWriter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        start: 0,
        typingSpeed: 0,
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
      // setTimeout(console.log("DONE timeout"),3000)
      return;
    }
    setTimeout(this.handleType, 150);
  };
  
  handleClick() {
    console.warn("CLICKED INNNNN");
    
    setTimeout(this.props.nextCard(), 3000)
      // this.setState({text: "left"});
    }
    render() {    
      return (
        <p className="text fade-in">
          <button onClick={()=> this.handleClick()}>click</button>

          <span >{ this.state.text }</span>
          <span id="cursor"></span>
        </p>
      );
      
    }
  }
  
  export default TypeWriter;
