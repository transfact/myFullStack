import styled from 'styled-components';
import { useState } from 'react';

const TrueColorBtn = styled.button`
    background-color: red;
    color: black;
`;
const FalseColorBtn = styled.button`
    background-color: blue;
    color: white;
`;

const TrueMain = styled.div`
    height: 1000px;
    width: 1000px;
    background-color: blue;
    color: white;
`;

const FalseMain = styled.div`
    height: 1000px;
    width: 1000px;
    background-color: red;
    color: black;
`;

export default function StyledCompoPratice() {
    const [state, setState] = useState(true);
    return (
        <div>
            {state ? (
                <TrueMain>
                    <TrueColorBtn
                        onClick={() => {
                            setState(false);
                        }}
                    >
                        클릭
                    </TrueColorBtn>
                </TrueMain>
            ) : (
                <FalseMain>
                    <FalseColorBtn onClick={() => setState(true)}>클릭</FalseColorBtn>
                </FalseMain>
            )}
        </div>
    );
}
