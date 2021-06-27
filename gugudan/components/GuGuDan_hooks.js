"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var GuGuDan = function () {
    var _a = react_1.useState(Math.ceil(Math.random() * 9)), first = _a[0], setFirst = _a[1];
    var _b = react_1.useState(Math.ceil(Math.random() * 9)), second = _b[0], setSecond = _b[1];
    var _c = react_1.useState(''), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(''), result = _d[0], setResult = _d[1];
    var inputEl1 = react_1.useRef(null);
    var onSubmitForm = function (e) {
        e.preventDefault();
        var input = inputEl1.current;
        if (parseInt(value, 10) === first * second) {
            setResult('Correct !');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        }
        else {
            setResult('Incorrect !');
            setValue('');
        }
        if (input) {
            input.focus();
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            first,
            " * ",
            second,
            " = ?"),
        React.createElement("form", { onSubmit: onSubmitForm },
            React.createElement("input", { ref: inputEl1, type: "number", value: value, onChange: function (e) { return setValue(e.target.value); } })),
        React.createElement("div", null, result)));
};
exports["default"] = GuGuDan;
