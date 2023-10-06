import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
    const [text, setText] = useState('');
    //Store의 state를 조회가능한 강력한 함수

    //인자로 강력한 함수, 콜백함수의 매개변수로 state를 받을 수 있음.
    //자동으로 subscibe를 하고 있어 데이터가 변형되면 컴포넌트가 재실행
    const todos = useSelector((state) => state);

    //dispatch는 reducer에서 사용한 action을 넣어서 사용하게 된다.
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text });
    };

    const onClicker = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_TODO', id: Number(id) });
    };
    return (
        <>
            <h1>To Dos</h1>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} name="todo" className="todo" type="text" placeholder="할 일 추가" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} id={todo.id}>
                            <span>{todo.text}</span>
                            <button type="button" onClick={() => onClicker(todo.id)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
