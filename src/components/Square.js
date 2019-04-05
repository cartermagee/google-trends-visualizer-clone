import React from 'react';
import PropTypes from 'prop-types';

const Square = ({setGrid, dim}) => (
    <div className="square" title={dim[0]+'x'+dim[1]} dim={dim} onClick={() => setGrid(dim)}></div> 
)
Square.propTypes = {
    setGrid: PropTypes.func.isRequired,
    dim: PropTypes.array.isRequired
}
export default Square;