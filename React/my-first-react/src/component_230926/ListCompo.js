import styled from 'styled-components';
import { useState } from 'react';

const Input = styled.input.attrs({ type: 'text' })`
    width: 200px;
    height: 100px;
`;
const InputBtn = styled.button`
    width: 70px;
    height: 70px;
`;

const UList = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    max-height: 200px;
`;
const LI = styled.li`
    text-align: left;
    font-weight: bold;
    font-size: 20px;
`;

export default function ListCompo() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);

    return (
        <>
            <Input
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }}
            ></Input>
            <InputBtn
                onClick={() => {
                    setItems([...items, item]);
                    setItem('');
                }}
            >
                입력
            </InputBtn>
            <UList>
                {items.map((item, index) => (
                    <div key={item + index}>
                        <LI>
                            {index + 1} : {item}
                        </LI>
                        <hr></hr>
                    </div>
                ))}
            </UList>
        </>
    );
}
