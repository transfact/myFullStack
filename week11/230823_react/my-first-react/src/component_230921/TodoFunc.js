import { useState, useEffect } from 'react';

export default function TodoFunc() {
    const [work, setWork] = useState('');
    const [todos, setTodos] = useState([]);
    function makeTodo() {
        setTodos((preTodo) => {
            if (preTodo.length + 1 >= 13) {
                alert('할일이 너무 많아요!');
            }
            return [...todos, { work, checked: false }];
        });
        setWork('');
    }
    function delCheckedWork() {
        const FilterWork = todos.filter((todo) => {
            return !todo.checked;
        });
        setTodos(FilterWork);
    }
    // useEffect(() => {
    //     if (todos.length >= 10) {
    //         alert('할일이 너무 많아요');
    //     }
    // }, [todos.length]);

    return (
        <>
            <h1>TodoFunc</h1>
            <input
                type="text"
                value={work}
                placeholder="할일"
                onChange={(e) => {
                    setWork(e.target.value);
                }}
                required
            />
            <button type="button" onClick={makeTodo}>
                할일
            </button>

            <ul>
                {todos.map((todo, idx) => {
                    return (
                        // 이정도면 고유하다고 혹은 DB에서 가져왔다고 했을때
                        <li key={todo.work + idx}>
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={(e) => {
                                    todos[idx].checked ? (todos[idx].checked = false) : (todos[idx].checked = true);
                                    setTodos([...todos]);
                                }}
                            />
                            <span>{todo.work}</span>
                        </li>
                    );
                })}
            </ul>
            <br />
            <button onClick={delCheckedWork}>체크된일 삭제</button>
        </>
    );
}
