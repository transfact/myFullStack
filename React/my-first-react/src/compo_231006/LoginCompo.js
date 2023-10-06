import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/logInIndex';

export default function LoginCompo() {
    const dispatch = useDispatch();

    const login = useSelector((state) => state.login);

    const loginHandler = () => {
        dispatch(loginAction.login());
    };

    const logoutHandler = () => {
        dispatch(loginAction.logout());
    };

    console.log(login);

    return (
        <>
            {login.isLogin ? (
                <>
                    <h1>로그아웃해주세요</h1> <button onClick={logoutHandler}>Logout</button>
                </>
            ) : (
                <>
                    <h1>로그인해주세요</h1> <button onClick={loginHandler}>Login</button>
                </>
            )}
        </>
    );
}
