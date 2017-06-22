import React, { Component } from 'react';

import { ROWS, PLAYER1, PLAYER2 } from 'SRC/constants';
import { TableHeader } from 'SRC/components/TableHeader';
import { TableBody } from 'SRC/components/TableBody';
import { newBoard, addDisc, checkForWin } from 'SRC/board';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      player: PLAYER1,
      message: false
    };
    this.dropDisk = this.dropDisk.bind(this);
  }

  dropDisk(row) {
    const returnValue = addDisc(this.state.board, this.state.player, row);
    this.setState({
      board: returnValue.board,
      message: returnValue.message,
      player: returnValue.player || this.state.player === PLAYER1
        ? PLAYER2
        : PLAYER1
    });
  }

  render() {
    return (
      <div>
        {this.state.message && <h1>{this.state.message}</h1>}
        <table>
          <TableHeader action={this.dropDisk} />
          <TableBody board={this.state.board} />
        </table>
      </div>
    );
  }
}
export { Board };
