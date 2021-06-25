import * as React from 'react';
import {Component} from "react";

interface State {
    first: number,
    second: number,
    value: string,
    result: string,
}

class GuGuDan extends Component<{}, State> {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    };

    input: HTMLInputElement | null = null;
    onRefInput = (c: HTMLInputElement) => {
        this.input = c;
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    }

    onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (parseInt(this.state.value, 10) === this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    result: 'Correct !',
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: ''
                };
            })
        } else {
            this.setState({
                result: 'Incorrect !',
                value: '',
            })
        }
        if (this.input) {
            this.input.focus();
        }
    }

    render() {
        return (
            <>
                <div>{this.state.first} * {this.state.second} = ?</div>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        ref={this.onRefInput}
                        type="number"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }

}

export default GuGuDan;