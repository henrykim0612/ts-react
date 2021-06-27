import * as React from "react";
import { Component } from "react";

interface State {
    state: "waiting" | "now" | "ready";
    message: string;
    result: number[];
}

class Main extends Component<{}, State> {
    state: State = { // 원래는 Constructor 를 써서 state 를 선언해야 하지만, 지금처럼 약식으로 선언하게 되면 Type 추론이 안됨.. 그래서 : State 를 써줘야함.
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [],
    };

    timeout: number | null = null;
    startTime: number | null = null;
    endTime: number | null = null;

    onClickScreen = () => {
        const { state } = this.state;
        if (state === "waiting") {
            this.timeout = window.setTimeout(() => {
                this.setState({
                    state: "now",
                    message: "지금 클릭",
                });
                this.startTime = new Date().getTime();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
            this.setState({
                state: "ready",
                message: "초록색이 되면 클릭하세요.",
            });
        } else if (state === "ready") {
            // 성급하게 클릭
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.setState({
                state: "waiting",
                message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요.",
            });
        } else if (state === "now") {
            // 반응속도 체크
            this.endTime = new Date().getTime();
            this.setState((prevState) => {
                return {
                    state: "waiting",
                    message: "클릭해서 시작하세요.",
                    result: [...prevState.result, this.endTime! - this.startTime!],
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result: [],
        });
    };

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 ? null : (
            <>
                <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={this.onReset}>리셋</button>
            </>
        );
    };

    render() {
        const { state, message } = this.state;
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default Main;