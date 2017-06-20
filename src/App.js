import React from 'react';
import { newBoard } from 'SRC/board'
import { Board } from 'SRC/components/board';

function App() {
  const boardData = newBoard();
  return (
    <div>
      <Board />
    </div>
  );
}

export default App;
