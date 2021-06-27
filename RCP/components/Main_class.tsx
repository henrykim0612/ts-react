import * as React from 'react';
import { Component } from 'react';

const rspCoords = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px',
} as const;

const scores = {
    scissors: 1,
    rock: 0,
    paper: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['rock', 'scissors', 'paper']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!;
};

interface State {
    result: string,
    imgCoords: ImgCoords,
    score: number,
}
class Main extends Component<{}, State> {
    state: State = {
        result: '',
        imgCoords: rspCoords.rock,
        score: 0,
    }

    interval: number | null = null;
    clicked: boolean = false;

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 해요
        this.interval = window.setInterval(this.changeHand, 100);
    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
        clearInterval(this.interval!);
    }

    changeHand = () => {
        const { imgCoords } = this.state;
        if (imgCoords === rspCoords.rock) {
            this.setState({
                imgCoords: rspCoords.scissors,
            });
        } else if (imgCoords === rspCoords.scissors) {
            this.setState({
                imgCoords: rspCoords.paper,
            });
        } else if (imgCoords === rspCoords.paper) {
            this.setState({
                imgCoords: rspCoords.rock,
            });
        }
    };

    onClickBtn = (choice: keyof typeof rspCoords) => () => {
        if (!this.clicked) {
            const { imgCoords } = this.state;
            clearInterval(this.interval!);
            this.clicked = true;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoords)!];
            const diff = myScore - cpuScore;
            if (diff === 0) {
                this.setState({
                    result: '비겼습니다!',
                });
            } else if ([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: '이겼습니다!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: '졌습니다!',
                        score: prevState.score - 1,
                    };
                });
            }
            window.setTimeout(() => {
                this.interval = window.setInterval(this.changeHand, 100);
                this.clicked = false;
            }, 1000);
        }
    };

    render() {
        const { result, score, imgCoords } = this.state;
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>rock</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('scissors')}>scissors</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>paper</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default Main;