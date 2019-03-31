import React, { Component } from 'react';
import './styles/main.css';
import Animals from './data/animal_names.json';
import Colors from './data/colors.json';
import Card from './components/Card.js';

import Tile from './components/Tile2.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: [],
      animals: [],
      rows: 5,
      columns: 5,
      transition: ''
    }
  }
  componentWillMount(){
    this.setState({animals: Animals, colors: Colors});
  }

  renderGrid() {
    const { colors, animals, rows, columns } = this.state;
    const grid = {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, calc(100vh / ${rows}))`
    }
    const row = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, calc(100vw / ${columns}))`,
    }
      
    let i = 0;
    let tiles = [];
    while ( i < rows) {
      let j = 0;
      let row = [];
      while (j < columns) {
        let id = i+'-'+j;
        row.push(<Tile id={id} key={id} animals={animals} colors={colors}>
          {this.props.children}
        </Tile>);
        j++;
      }
      tiles.push(row);
      i++;
    }

    return ( <div className ='grid' style={grid}>{tiles.map((rowArr, index) => {
      return <div key={index} className='row' style={row}>{rowArr}</div>;
    })}</div> )
  }
  handleClick() {
    console.warn("CLICKED INNNNN");

    this.setState({transition: "left"});
  }

  render() {
    return (
      <main>
        {this.renderGrid()}
        <button onClick={()=> this.handleClick()}>click</button>
      </main>
    );
  }
}

export default App;