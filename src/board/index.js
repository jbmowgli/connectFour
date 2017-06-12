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

export { newBoard, findFirstRow }
