import { newBoard, findFirstRow, addDisc, checkForWin } from '../index';
import { PLAYER1, PLAYER2 } from 'SRC/constants';
it('creates a new board', () => {
  const expected = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  expect(newBoard()).toEqual(expected);
});

it('checks the next available row, given a column', () => {
  const testBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
  ];
  expect(findFirstRow(testBoard, 4)).toEqual(3);
});

it('adds a disc to the board', () => {
  const testBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
  ];
  const resultBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 1, 0]
  ];

  expect(addDisc(testBoard, PLAYER1, 5)).toEqual(resultBoard);
});

it('checks for a horizontal win', () => {
  const horWinBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 2, 2, 2, 0],
    [0, 0, 2, 1, 1, 1, 0]
  ];

  expect(checkForWin(horWinBoard, PLAYER2, 4, 2)).toEqual(true);
});

it('checks for a vertical win', () => {
  const verWinBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 1, 0],
    [0, 0, 0, 2, 1, 2, 0],
    [0, 0, 2, 2, 1, 1, 0]
  ];

  expect(checkForWin(verWinBoard, PLAYER1, 2, 4)).toEqual(true);
});

it('checks for a diagnol win', () => {
  const diagWinBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 1, 0],
    [0, 0, 0, 2, 1, 2, 0],
    [0, 0, 2, 1, 1, 1, 0]
  ];

  expect(checkForWin(diagWinBoard, PLAYER1, 2, 5)).toEqual(true);
});
