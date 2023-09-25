import { useState } from 'react';

export default function ColorChangeFunc() {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('검정색');

    return (
        <>
            <h2 style={{ color }}>{text} 글씨</h2>
            <button
                type="button"
                onClick={() => {
                    setColor('red');
                    setText('빨간색');
                }}
            >
                빨강
            </button>
            <button
                type="button"
                onClick={() => {
                    setColor('blue');
                    setText('파란색');
                }}
            >
                파랑
            </button>
        </>
    );
}
