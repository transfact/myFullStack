import { useState, useEffect, useRef } from 'react';

export default function FuncRef() {
    //useRef로 만든 초기값은, current로 접근가능함
    //useRef로 생성된 변수는, 컴포넌트가 리렌더 되도 그값 유지
    // useRef의 값이 변경되고, 컴포넌트 리렌더 안됨
    const inputRef = useRef();
    const localRef = useRef(0);
    const [time, setTime] = useState(0);
    const handleRef = () => {
        setTime(0);
        localRef.current += 1;
        console.log(localRef.current);
    };
    useEffect(() => {
        const id = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        //setInterval 중지
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <h1>FuncRef</h1>
            <h2>time : {time}</h2>
            <p>localRef: {localRef.current}</p>
            <input ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <button onClick={handleRef}>Ref 1더하기</button>
        </>
    );
}
