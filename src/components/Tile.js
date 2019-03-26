import React, {Component} from 'react';
// import '../styles/tile.css';

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
    componentDidMount() {
        const animal = this.props.animals[Math.floor(Math.random()*this.props.animals.length)];
        const color = this.props.colors[Math.floor(Math.random()*this.props.colors.length)];
        const nextAnimal = this.props.animals[Math.floor(Math.random()*this.props.animals.length)];
        const nextColor = this.props.colors[Math.floor(Math.random()*this.props.colors.length)];
        console.warn("this.props = ",this.props);
        

        this.setState({animal, color, nextAnimal, nextColor})
        // console.warn('animal = ', animal);
        // console.warn('color = ', color);
    }

    render(){
        const { animal, color } = this.state;
        
        return (
                <div className="card"style={{background: color}}>
                <p className="text">
                    {animal}
                    </p> 
                </div>
        );
    }
}

export default Tile;