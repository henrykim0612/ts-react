"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var GuGuDan = /** @class */ (function (_super) {
    __extends(GuGuDan, _super);
    function GuGuDan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        };
        _this.input = null;
        _this.onRefInput = function (c) {
            _this.input = c;
        };
        _this.onChange = function (e) {
            _this.setState({ value: e.target.value });
        };
        _this.onSubmitForm = function (e) {
            e.preventDefault();
            if (parseInt(_this.state.value, 10) === _this.state.first * _this.state.second) {
                _this.setState(function (prevState) {
                    return {
                        result: 'Correct !',
                        first: Math.ceil(Math.random() * 9),
                        second: Math.ceil(Math.random() * 9),
                        value: ''
                    };
                });
            }
            else {
                _this.setState({
                    result: 'Incorrect !',
                    value: '',
                });
            }
            if (_this.input) {
                _this.input.focus();
            }
        };
        return _this;
    }
    GuGuDan.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                this.state.first,
                " * ",
                this.state.second,
                " = ?"),
            React.createElement("form", { onSubmit: this.onSubmitForm },
                React.createElement("input", { ref: this.onRefInput, type: "number", value: this.state.value, onChange: this.onChange })),
            React.createElement("div", null, this.state.result)));
    };
    return GuGuDan;
}(react_1.Component));
exports["default"] = GuGuDan;
