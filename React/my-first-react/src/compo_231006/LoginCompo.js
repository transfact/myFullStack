import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/logInIndex';
function simulateClick() {
    var clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
    });
    myButton.dispatchEvent(clickEvent);
}
function startPress() {
    if (!isPressing) {
        isPressing = true;
        pressInterval = setInterval(simulateClick, 100); // 0.1초마다 클릭 이벤트를 발생시킵니다.
    }
}

function stopPress() {
    if (isPressing) {
        isPressing = false;
        clearInterval(pressInterval);
    }
}

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
