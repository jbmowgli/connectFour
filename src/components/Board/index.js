import React, { Component } from 'react';

import { ROWS, PLAYER1, PLAYER2 } from 'SRC/constants';
import { TableHeader} from 'SRC/components/TableHeader';
import { TableBody } from 'SRC/components/TableBody';
import { newBoard, addDisc, checkForWin } from 'SRC/board';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: newBoard(),
      player: PLAYER1,
    };
    this.dropDisk = this.dropDisk.bind(this);
  }

  dropDisk(row){
    const returnBoard = addDisc(this.state.board, this.state.player, row);
    this.setState({
      board: returnBoard,
      player: this.state.player === PLAYER1 ? PLAYER2 : PLAYER1
    })
  }

  render() {
    return (
      <div>
        <table>
          <TableHeader action={this.dropDisk} />
          <TableBody board={this.state.board} />
        </table>
      </div>
    );
  }
}
export { Board };
