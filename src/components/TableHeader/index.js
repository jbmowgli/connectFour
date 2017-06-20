import React from 'react'

import { COLUMNS } from 'SRC/constants'

const TableHeader = props => {
  let buttons = [];
  for(let i = 0; i < COLUMNS; i += 1) {
    buttons.push(
      <th key={`button_${i}`}>
        <button
          type="button"
          onClick={() => props.action(i)}
        />
      </th>
    )
  }
  return (
    <thead>
      <tr>
        {buttons}
      </tr>
    </thead>
  );
}

export { TableHeader }
