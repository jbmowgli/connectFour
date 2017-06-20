import { PLAYER1, ROWS, COLUMNS } from 'SRC/constants';
function newBoard() {
  let board = [];
  for (let i = 0; i < ROWS; i += 1) {
    let row = []
    for (let j = 0; j < COLUMNS; j += 1) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

function findFirstRow(board, column) {
  for (let i = 5; i >= 0; i -= 1) {
    if (board[i][column] == 0) {
      return i;
    }
  }
  return -1;
}

function addDisc(board, player, column) {
  const row = findFirstRow(board, column);
  if (row >= 0) {
    const elementValue = player;
    const changedRow = board[row];
    // refactor to make pure function
    board[row][column] = elementValue;
    return board;
  }
  return false;
}

function checkForWin(board, player, row, col) {
  // admittedly borrowed this logic, but wrapped it in a closure to encapsulate
  // variables. Plus it is much more effecient than the O(n^2) nested for loop that I might have used
  if (adjacentCell(row, col, 0, 1) + adjacentCell(row, col, 0, -1) > 2) {
    return true;
  } else {
    if (adjacentCell(row, col, 1, 0) > 2) {
      return true;
    } else {
      if (adjacentCell(row, col, -1, 1) + adjacentCell(row, col, 1, -1) > 2) {
        return true;
      } else {
        if (adjacentCell(row, col, 1, 1) + adjacentCell(row, col, -1, -1) > 2) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  function adjacentCell(row, col, rowDir, colDir) {
    if (getCell(row, col) === getCell(row + rowDir, col + colDir)) {
      return 1 + adjacentCell(row + rowDir, col + colDir, colDir, rowDir);
    } else {
      return 0;
    }
  }

  function getCell(row, col) {
    if (board[row] === undefined || board[row][col] === undefined) {
      return -1;
    } else {
      return board[row][col];
    }
  }
}

export { newBoard, findFirstRow, addDisc, checkForWin };
