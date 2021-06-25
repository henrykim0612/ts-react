import * as React from 'react'; // react 는 export 가 없음
import * as ReactDOM from 'react-dom'; // react-dom 은 export 가 없음
import GuGuDan from './components/GuGuDan_hooks'; // export default 하는 경우는 * as 필요없음

ReactDOM.render(<GuGuDan />, document.getElementById('root'));


