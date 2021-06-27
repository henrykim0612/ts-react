import * as React from 'react';
import {useCallback, useRef, useState} from "react";
import Try from "./Try";
import {TryInfo} from "../types";

// 중복없는 4개 숫자
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const Main = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState<TryInfo[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);
  const resetGame = (input: HTMLInputElement | null) => {
    setValue('');
    setAnswer(getNumbers());
    setTries([]);
    if (input) {
      input.focus();
    }
  }

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input =  inputEl.current;
    if (value === answer.join('')) {
      setTries((t) => ([
          ...t,
        {
          try: value,
          result: 'HOMERUN',
        }
      ]));
      setResult('HOMERUN!');
      alert('Congratulation !');
      resetGame(input);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v, 10));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')} 입니다.`);
        alert('Restart game...');
        resetGame(input);
      } else {
        console.log('Answer: ', answer.join(''));
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            console.log('Strike:', answerArray[i], answer[i]);
            strike++;
          } else if (answer.includes(answerArray[i])) {
            console.log('Ball:', answerArray[i], answer.indexOf(answerArray[i]));
            ball++;
          }
        }
        setTries((t) => ([
          ...t,
          {
            try: value,
            result: `${strike} Strike, ${ball} Ball`,
          },
        ]));
      }
    }
  }, [value, answer]);


  return (
      <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input
              ref={inputEl}
              maxLength={4}
              value={value}
              onChange={useCallback(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                      setValue(e.target.value),
                  []
              )}
          />
          <button>입력!</button>
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => (
              <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
          ))}
        </ul>
      </>
  )
}

export default Main;