import React from "react";
import { Switch } from "react-router-dom";
import Slider from "../Slider";
import Card from "./Card.js";
import "../styles/tile.css";


class Tile extends React.Component {
  constructor(props) {
    super(props);
    console.warn("props = ", props.children);

    this.state = {
      childPosition: Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null,
      
      animal: '',
      animalIndex: '',
      color: '',
      colorIndex: '',
      id: '',
      appearCard: true
    };
  }

  componentWillMount() {
    console.warn("props = ", this.props);
    console.warn("state = ", this.state);

    const animalIndex = Math.floor(Math.random()*this.props.animals.length);
    const animal = this.props.animals[animalIndex];
    const colorIndex = Math.floor(Math.random()*this.props.colors.length);
    const color = this.props.colors[colorIndex];
    const id = this.props.id;
    this.setState({animal, color, id, appearCard: true});
}
  componentDidUpdate(prevProps, prevState) {
    console.warn("currentState = ", this.state);
    console.warn("prevProps= ", prevProps);
    console.warn("prevState= ", prevState);
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      this.setState({
        childPosition: Slider.TO_LEFT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren = () => {
    this.setState({
      childPosition: Slider.FROM_RIGHT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  };

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  updateStep,
  children
}) => (
  <Card  style={{background: "#fff", border: "1px solid red"}}
    // render={({ location }) => (
    //   <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
    //     <CustomSwitch location={location}>{children}</CustomSwitch>
    //   </AnimatorComponent>
    // )}
  />
);

const SwitchWithSlide = animateSwitch(Switch, Tile);

export default SwitchWithSlide;
