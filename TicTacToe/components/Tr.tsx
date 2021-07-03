import { Dispatch, FunctionComponent, memo, useMemo, useState } from 'react';
import * as React from 'react';
import Td from './Td';

interface Props {
  rowIndex: number;
  rowData: string[];
  dispatch: Dispatch<any>;
}
const Tr: FunctionComponent<Props> = ({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');
  const CreateTd = (i: number) => useMemo(() => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} />, [i]);
  return (
    <tr>
      {Array(rowData.length).fill(null).map((td, i) => CreateTd(i))}
    </tr>
  );
};

export default memo(Tr);
