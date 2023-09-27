import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: 'antiquewhite' }}>
                <Link to="/">
                    <h2>React Router 실습</h2>
                </Link>
                <nav>
                    <ul style={{ display: 'flex', listStyle: 'none' }}>
                        <li style={{ margin: '4px' }}>
                            <Link to="/student/kdt">학생KDT</Link>
                        </li>

                        <li style={{ margin: '4px' }}>
                            <Link to="/student/codingon">코딩온</Link>
                        </li>

                        <li style={{ margin: '4px' }}>
                            <Link to="/student/new?name=kdt3rd">searchParams</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
}
