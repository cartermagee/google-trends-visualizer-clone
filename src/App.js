import React, { Component } from 'react';
import './styles/main.css';
import Animals from './data/animal_names.json';
import Colors from './data/colors.json';
import Transitions from './data/transitions.json';
import TypingSpeed from './data/typingSpeed.json';

import Tile from './components/Tile.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: [],
      animals: [],
      typingSpeed: [],
      rows: 5,
      columns: 5,
      transitions: []
    }
  }
  componentWillMount(){
    this.setState({animals: Animals, colors: Colors, transitions: Transitions, typingSpeed: TypingSpeed});
  }

  renderGrid() {
    const { colors, animals, rows, columns, transitions, typingSpeed } = this.state;
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
        row.push(<Tile id={id} key={id} animals={animals} transitions={transitions} colors={colors} typingSpeed={typingSpeed}/>);
        j++;
      }
      tiles.push(row);
      i++;
    }

    return ( <div className ='grid' style={grid}>{tiles.map((rowArr, index) => {
      return <div key={index} className='row' style={row}>{rowArr}</div>;
    })}</div> )
  }

  render() {
    return (
      <main>
        {this.renderGrid()}
      </main>
    );
  }
}

export default App;