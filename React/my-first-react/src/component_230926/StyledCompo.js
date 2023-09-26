import styled from 'styled-components';

const _BoxOne = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
`;

//how to use props
const _BoxTwo = styled.div`
    background-color: ${(props) => (props.color ? props.color : 'red')};
    width: 100px;
    height: 100px;
`;
//how to extend components
const _Circle = styled(_BoxTwo)`
    border-radius: 50%;
`;
//기존 태그를 이름만 바꿔서 사용해보기 => as 이용
//as를 활용하면 만들어둔 스타일을 태그를 바꿔서 활용할 수 있다.

const _Btn = styled.button`
    background-color: aqua;
    color: red;
    border-radius: 5px;
    padding: 10px 15px;
`;
//태그에 옵션값을 넣을 수 있다.
const _Input = styled.input.attrs({ type: 'password' })`
    background-color: yellow;
`;

//중첩

const _BoxThree = styled.div`
    background-color: antiquewhite;
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    p {
        font-weight: bold;
        font-size: 30px;
        &:hover {
            font-size: 50px;
        }
    }
    ${_Input} {
        background-color: brown;
    }
`;

export default function StyledCompo() {
    return (
        <div>
            <_BoxOne></_BoxOne>
            <_BoxTwo color={'skyblue'}></_BoxTwo>
            <_Circle color={'green'}></_Circle>
            <_Btn onClick={() => alert('clicked')}>클릭</_Btn>
            <_Btn as="a" href="https://www.naver.com" target="_blank" rel="noreferrer noopener">
                a태그
            </_Btn>
            <_Input />
            <_BoxThree>
                <p>Hello Style</p>
                <_Input />
            </_BoxThree>
        </div>
    );
}
