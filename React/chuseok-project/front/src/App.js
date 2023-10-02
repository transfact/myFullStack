import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Input, setInput] = useState('');
    const clicked = useRef([]);

    useEffect(() => {
        const todoData = async () => {
            const res = await axios({
                method: 'GET',
                url: 'http://localhost:8080/todos',
            });
            // console.log(res.data);

            if (clicked.current.length == 0) {
                for (let i = 0; i < res.data.length; i++) {
                    clicked.current.push(0);
                }
            }

            const clicker = res.data.map((value, idx) => {
                return { ...value, clicked: clicked.current[idx] };
            });
            setTodos(clicker);
            setLoading(false);
        };
        console.log('effect');
        todoData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const todo = {
                                title: Input,
                                done: 0,
                            };
                            const result = await axios({ method: 'post', url: 'http://localhost:8080/todo', data: todo });
                            setTodos([...todos, result.data.result]);
                            setInput('');
                        }}
                    >
                        <input value={Input} onChange={(e) => setInput(e.target.value)}></input>
                        <button type="submit">ADD</button>
                    </form>

                    <ul>
                        {todos.map((value) => {
                            return (
                                <li key={value.id}>
                                    <input
                                        type="checkbox"
                                        value={value.done}
                                        checked={value.done == 1}
                                        onChange={() => {
                                            //이렇게 해도 되긴 하는데...
                                            const idx = todos.findIndex((obj) => obj.id == value.id);
                                            todos[idx].done == 1 ? (todos[idx].done = 0) : (todos[idx].done = 1);
                                            setTodos([...todos]);
                                        }}
                                    />
                                    {value.clicked == 1 ? (
                                        <span
                                            onClick={() => {
                                                const idx = todos.findIndex((obj) => obj.id == value.id);
                                                todos[idx].clicked = 0;
                                                setTodos([...todos]);
                                            }}
                                        >
                                            CLICKED {value.title}
                                        </span>
                                    ) : (
                                        <span
                                            onClick={() => {
                                                const idx = todos.findIndex((obj) => obj.id == value.id);
                                                todos[idx].clicked = 1;
                                                setTodos([...todos]);
                                            }}
                                        >
                                            {value.title}
                                        </span>
                                    )}

                                    <button
                                        onClick={async () => {
                                            const result = await axios({ method: 'delete', url: `http://localhost:8080/todo/${value.id}` });
                                            const idx = todos.findIndex((obj) => obj.id == value.id);
                                            todos.splice(idx, 1);
                                            setTodos([...todos]);
                                        }}
                                    >
                                        삭제
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
