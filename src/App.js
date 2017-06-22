import React from 'react';
import { Board } from 'SRC/components/board';

function App({ board }) {
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
