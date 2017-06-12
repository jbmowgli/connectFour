import { newBoard, findFirstRow } from '../index'
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

it('checks the next available row', () => {
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
