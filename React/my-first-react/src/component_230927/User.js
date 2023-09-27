import { Link } from 'react-router-dom';

export const users = [
    {
        id: 1,
        name: '길동',
        comment: {
            text: '안녕',
        },
    },
    {
        id: 2,
        name: '홍길',
        comment: {
            text: '바이',
        },
    },
    {
        id: 3,
        name: '홍동',
        comment: {
            text: '홍바',
        },
    },
];

export default function User() {
    return (
        <div>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link to={`/User/${user.id}`}>
                                <div>{user.name}</div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
