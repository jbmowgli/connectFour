import React from 'react';

import { COLUMNS, ROWS } from 'SRC/constants';

const TableBody = props => {
  const body = Array.from({ length: ROWS }).map((_, r) => {
    const row = props.board[r];

    const cells = Array.from({ length: COLUMNS }).map((_, c) => {
      return <td key={`row${r}_col${c}`}>{row[c]}</td>;
    });
    return <tr key={`row${r}`}>{cells}</tr>;
  });

  return <tbody>{body}</tbody>;
};

export { TableBody };
