import React from 'react';
import ReactDOM from 'react-dom';
import App from 'SRC/App';
import { newBoard } from 'SRC/board';

ReactDOM.render(<App board={newBoard()} />, document.getElementById('root'));
