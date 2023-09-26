import { useState, useEffect, useMemo } from 'react';

export default function MemoFunc() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    //제공된 함수의 반환값을 기억하여 의존성 배열의 값이 변경될떄만 해당함수를 재실행
    const calc = useMemo(() => {
        console.log('memo');
        for (let i = 0; i < 1000000000; i++) {}
        return count * 2;
    }, [count]);

    return (
        <>
            <br></br>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>더하기</button>
            <p>count : {count}</p>
            <p>calc : {calc}</p>
        </>
    );
}
