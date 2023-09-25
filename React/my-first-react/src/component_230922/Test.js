import { useState } from 'react';

function sleep(sec) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
} // 함수정의

export default function Test(props) {
    const [state, setState] = useState(0);

    function addState() {
        setState((prev) => prev + 5);
        setState(state + 1);
    }
    return (
        <>
            <div>state: {state}</div>
            <button onClick={addState}>PLUS</button>
        </>
    );
}
