import * as React from 'react';
import { Dispatch, FunctionComponent, useCallback, useMemo } from 'react';
import Tr from './Tr';

interface Props {
  tableData: string[][];
  dispatch: Dispatch<any>;
  onClick: () => void;
}
const Table: FunctionComponent<Props> = ({ tableData, dispatch }) => {
  console.log('Table rendered');

  const CreateTr = (i: number) => useMemo(() => <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />, [i]);

  return (
    <table>
      <tbody>
        {Array(tableData.length).fill(null).map((tr, i) => CreateTr(i))}
      </tbody>
    </table>
  );
};

export default Table;
