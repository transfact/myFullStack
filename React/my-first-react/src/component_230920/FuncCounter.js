import { useState } from 'react';
export default function FuncCounter() {
    const [number, setNumber] = useState(0);
    //useState 써줘서 이걸 완성해줘
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
    );
}
