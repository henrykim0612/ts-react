import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from "./components/Main_hooks";
import {hot} from 'react-hot-loader/root';

const Hot = hot(Main);
ReactDOM.render(<Hot />, document.getElementById('root'));