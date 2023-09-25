import { useEffect, useState } from 'react';

function MyCompo(props) {
    const num = props.number;
    const [text, setText] = useState('');
    useEffect(() => {
        console.log('mount/render 되면 실행(항상 실행)');
    });
    useEffect(() => {
        console.log('컴포넌트 실행때 실행');
        return () => {
            console.log('캄포넌트 제거시 실행');
        };
    }, []);

    useEffect(() => {
        console.log(text + '1');
    }, [text, num]);

    return (
        <>
            <div>My Component Number : {num}</div>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            ></input>
        </>
    );
}

export default function LifestyleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const [count, setCount] = useState(0);
    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }
    const changeNumberState = () => {
        setNumber(() => number + 1);
    };

    const changeVisibleState = () => {
        setVisible(() => !visible);
    };

    return (
        <>
            <br></br>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <button onClick={handleAlertClick}>Show alert</button>
            </div>

            <button onClick={changeNumberState}>PLUS</button>

            <button onClick={changeVisibleState}>on/off</button>
            <hr></hr>
            {visible && <MyCompo number={number} />}
        </>
    );
}
