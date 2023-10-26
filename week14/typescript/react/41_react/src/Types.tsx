import React from 'react';

interface myProps {
    name?: string;
}
interface myData {
    name: string;
    age: number;
}
//리액트를 사용한 compo선언
const Types: React.FC<myProps> = (props) => {
    const [count, setCount] = React.useState<myData | null>();
    const mylocal = React.useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (mylocal.current) {
            mylocal.current.focus();
        }
    };
    return (
        <>
            <h2>hi {props.name}</h2>
            <input ref={mylocal} />
            <button onClick={handleFocus}>focus</button>
        </>
    );
};
export default Types;
// export default function Types({ name }: myProps) {
//     return (
//         <>
//             <div></div>
//         </>
//     );
// }
