import React from 'react'

import { COLUMNS, ROWS } from 'SRC/constants'

const TableBody = props => {
  let body = [];
  for(let r = 0; r < ROWS; r += 1) {
    let cells = [];
    let row = props.board[r]

    for(let c = 0; c < COLUMNS; c += 1) {
      cells.push(<td key={`row${r}_col${c}`}>{row[c]}</td>)
    }
    body.push(<tr key={`row${r}`}>{cells}</tr>);
  }
  return <tbody>{body}</tbody>;
}

export { TableBody };
