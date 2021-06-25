import * as React from 'react';
import {useRef, useState} from "react";

const GuGuDan = () => {

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl1 = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl1.current;
        if (parseInt(value, 10) === first * second) {
            setResult('Correct !');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('Incorrect !');
            setValue('');
        }
        if (input) {
            input.focus();
        }
    }

    return (
        <>
            <div>{first} * {second} = ?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl1}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div>{result}</div>
        </>
    )
}

export default GuGuDan;