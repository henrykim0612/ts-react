import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

interface Props {
  rowIndex: number;
}
// props 가 인자값으로 있을때는 memo 를 사용하자.
const Tr: FC<Props> = memo(({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill(null).map((td, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
});

export default Tr;
