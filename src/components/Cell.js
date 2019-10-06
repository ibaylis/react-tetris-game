import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
        <StyledCell 
            type={type} 
            color={TETROMINOS[type].color}
        >
            {console.log("rerender")}
        </StyledCell>
    )

export default React.memo(Cell);
// Using React.memo so that it remembers only the rendering of the 
//cells that change. 
// The Cell component was rendering over 200 times, with memo, 
//kit brings it down to 4