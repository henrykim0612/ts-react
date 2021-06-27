import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

const rspCoords = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
} as const;

const scores = {
    scissors: 1,
    rock: 0,
    paper: -1,
} as const;


type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords)).find((k) => {
        return rspCoords[k] === imgCoords;
    })
}

const Main = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.rock);
    const [score, setScore] = useState(0);
    const interval = useRef<number>();
    const clicked = useRef<boolean>(false);

    useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        console.log('다시 실행');
        interval.current = window.setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할
            console.log('종료');
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.rock) {
            setImgCoord(rspCoords.scissors);
        } else if (imgCoord === rspCoords.scissors) {
            setImgCoord(rspCoords.paper);
        } else if (imgCoord === rspCoords.paper) {
            setImgCoord(rspCoords.rock);
        }
    };

    const onClickBtn = (choice: keyof typeof rspCoords) => () => {
        if (!clicked.current) {
            clearInterval(interval.current);
            clicked.current = true;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;
            if (diff === 0) {
                setResult('비겼습니다!');
            } else if ([-1, 2].includes(diff)) {
                setResult('이겼습니다!');
                setScore((prevScore) => prevScore + 1);
            } else {
                setResult('졌습니다!');
                setScore((prevScore) => prevScore - 1);
            }
            setTimeout(() => {
                interval.current = window.setInterval(changeHand, 100);
                clicked.current = false;
            }, 1000);
        }
    }

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('rock')}>rock</button>
                <button id="scissor" className="btn" onClick={onClickBtn('scissors')}>scissors</button>
                <button id="paper" className="btn" onClick={onClickBtn('paper')}>paper</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default Main;