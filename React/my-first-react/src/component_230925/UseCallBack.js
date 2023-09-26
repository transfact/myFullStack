import React, { useState, useCallback } from 'react';
//혹은 이렇게 React.memo를 사용하셨을 가능성
const ChildCompo = React.memo((props) => {
    console.log('ChildCompo');
    return (
        <>
            <button onClick={props.onClick}>더하기</button>
        </>
    );
});

export default function UseCallBack() {
    //의심되는게 두가지 =>inputValue input에 없지 않았을까
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    // codeWhisper는 신이다...
    //useCallback 미사용
    const plusCount = () => {
        setCount(count + 1);
    };
    //클로저 이야기...
    //여기서 생각해보자, prev => prev+1 이렇게 쓸꺼면 state에 의존적이지 않아도 값을 설정해줄수 있다.
    //굳이 다시 렌더링 할 필요 없다는 소리
    const plusCountCallBack = useCallback(() => {
        setCount((prev) => prev + 1);
        // setCount(count + 1);
    }, []);
    return (
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <ChildCompo onClick={plusCountCallBack}></ChildCompo>
            <p>{count}</p>
        </>
    );
}
