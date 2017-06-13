import { newBoard, findFirstRow, addDisc } from '../index';
import { PLAYER1, PLAYER2 } from 'SRC/constants';
it('creates a new board', () => {
  const expected = 
  [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ]
  expect(newBoard()).toEqual(expected)
});

it('checks the next available row, given a column', () => {
  const testBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0],
    [0,0,0,0,1,0,0]
  ]
  expect(findFirstRow(testBoard, 4)).toEqual(3);
})

it('adds a disc to the board', () => {
  const user = PLAYER1;
  const testBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0],
    [0,0,0,0,1,0,0]
  ]
  const resultBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0],
    [0,0,0,0,1,1,0]
  ]

  expect(addDisc(testBoard, PLAYER1, 5)).toEqual(resultBoard)
})