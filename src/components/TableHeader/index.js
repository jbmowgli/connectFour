import React from 'react';

import { COLUMNS } from 'SRC/constants';

const TableHeader = props => {
  const buttons = Array.from({ length: COLUMNS }).map((_, i) =>
    <th key={`button_${i}`}>
      <button type="button" onClick={() => props.action(i)} />
    </th>
  );

  return (
    <thead>
      <tr>
        {buttons}
      </tr>
    </thead>
  );
};

export { TableHeader };
