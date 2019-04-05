import React, {Component} from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

class GridChooser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
    renderSquares(){
        const { setGrid } = this.props;
        let i = 0;
        let squaresArray = [];
        while ( i < 5) {
            let j = 0;
            let row = [];
            while (j < 5) {
                let dim = [i+1, j+1];
                row.push(<Square key={dim} setGrid={setGrid} dim={dim}/>)
                j++
            }
            squaresArray.push(row);
            i++;
        }
        const squares = [].concat.apply([], squaresArray);
        return (
            <div className='gridChooser'>{squares}</div>
        )
    }
    handleEnter() {
        this.setState({hover: true});
    }
    handleLeave() {
        this.setState({hover: false});
        
    }
    render() {
        const style = {
            width: this.state.hover ? 120 : 30,
            height: this.state.hover ? 120 : 30,
        }
        return (
            <div className="squareContainer" 
                style={style} 
                onMouseEnter={() => this.handleEnter()} 
                onMouseLeave={() => this.handleLeave()}
            >
            {this.renderSquares()}
            </div> 
        );

    }
}
GridChooser.propTypes = {
    setGrid: PropTypes.func.isRequired
}
export default GridChooser;