import React, {Component} from 'react';
import '../styles/tile.css';

class Row extends Component {
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
        console.warn("this.props = ",this.props);
        
    }

    render(){        
        return (
                <div>
                    row
                </div>
        );
    }
}

export default Row;