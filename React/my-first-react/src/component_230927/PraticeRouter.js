import NavBar from './NavBar';
import NotFound from './404';
import Home from './Home';
import Student from './Student';
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from 'react-router-dom';
const PracticeRouter = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: '/student',
        element: <Outlet />,
        children: [
            {
                path: ':name',
                element: <Student></Student>,
            },
        ],
    },
]);

export default PracticeRouter;
