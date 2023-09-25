import { useEffect, useState } from 'react';
import axios from 'axios';

function UserFunc2() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users',
            });
            setUsers(res.data);
            setLoaded(true);
        }
        fetchData();
        return () => {
            console.log('연결해제!');
        };
    }, []);

    useEffect(() => {
        // if (users.length == 0) {
        //     axios({
        //         method: 'GET',
        //         url: 'https://jsonplaceholder.typicode.com/users',
        //     }).then((res) => {
        //         setUsers(res.data);
        //     });
        // }
        console.log('유저정보 업데이트 : ', users.length);
    }, [users.length]);

    return (
        <>
            {loaded ? (
                <ul>
                    {users.map((user, idx) => {
                        return (
                            <li key={user.id}>
                                <span>
                                    {user.name} - {user.email}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div>로딩중</div>
            )}

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />

                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

                <button
                    type="button"
                    onClick={() => {
                        setUsers([...users, { id: users.length + 1, name, email }]);
                        setName('');
                        setEmail('');
                    }}
                >
                    제출
                </button>
            </form>
        </>
    );
}
export default function UserFunc() {
    const [state, setState] = useState(false);

    return (
        <>
            <div>
                <button type="button" onClick={() => setState(!state)}>
                    {!state ? 'ON' : 'OFF'}
                </button>
            </div>
            <div>{state && <UserFunc2 />}</div>
        </>
    );
}
