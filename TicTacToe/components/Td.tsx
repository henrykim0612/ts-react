import * as React from 'react';
import { useCallback, memo, Dispatch, FunctionComponent } from 'react';
import { clickCell } from './TicTacToe';

interface Props {
  rowIndex: number;
  cellIndex: number;
  dispatch: Dispatch<any>;
  cellData: string;
  // children: string;
}

const Td: FunctionComponent<Props> = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch(clickCell(rowIndex, cellIndex));
  }, [cellData, cellIndex, rowIndex, dispatch]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  );
};

export default memo(Td);
