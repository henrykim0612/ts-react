"use strict";
exports.__esModule = true;
var React = require("react"); // react 는 export 가 없음
var ReactDOM = require("react-dom"); // react-dom 은 export 가 없음
var GuGuDan_hooks_1 = require("./components/GuGuDan_hooks"); // export default 하는 경우는 * as 필요없음
var root_1 = require("react-hot-loader/root");
var Hot = root_1.hot(GuGuDan_hooks_1["default"]);
ReactDOM.render(React.createElement(Hot, null), document.getElementById('root'));
