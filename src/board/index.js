import { PLAYER1 } from 'SRC/constants';
function newBoard() {
  return [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ];
}

function findFirstRow(board, column) {
  for(let i = 5; i >=0 ; i-=1){
    if(board[i][column] == 0){
      return i;
    }
  }
}

function addDisc(board, player, column) {
  const row = findFirstRow(board, column);
  const elementValue = player === PLAYER1 ? 1 : 2
  const changedRow = board[row]
  // refactor to make pure function
  board[row][column] = elementValue;

  return board;
}

export { newBoard, findFirstRow, addDisc }
