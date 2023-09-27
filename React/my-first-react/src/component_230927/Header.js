import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    //useNavigate 는 링크를 쓰지 않고 사용자를 어딘가로 이동시킴.
    const navi = useNavigate();
    const onClick = () => {
        navi('/redirect');
    };

    //유저는 직접 클릭 -> Link
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/User">User</Link>
                </li>
                <li>
                    <button onClick={onClick}>Redirect</button>
                </li>
            </ul>
        </div>
    );
}
