import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import User from './User';
import Redirect from './Redirect';
import UserDetail from './UserDetail';
import NotFound from './404';
import NewIndex from './NewIndex';
import Error from './Error';
import Comment from './Comment';
//BrowserRouter Ver
// export default function Router() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<Home></Home>} />
//                     <Route path="/about" element={<About></About>} />
//                     <Route path="/user" element={<User></User>} />
//                     <Route path="/user/:id" element={<UserDetail checkProp="checkProp"></UserDetail>} />
//                     <Route path="/redirect" element={<Redirect></Redirect>} />
//                     <Route path="*" element={<NotFound></NotFound>} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

//createBrowserRouter Ver
const Router = createBrowserRouter([
    {
        path: '/',
        element: <NewIndex />,
        children: [
            {
                path: '',
                element: <Home />,
                errorElement: <Error></Error>,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'redirect',
                element: <Redirect />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: '/user',
        element: <NewIndex></NewIndex>,
        children: [
            {
                path: '',
                element: <User></User>,
            },
            {
                path: ':id',
                element: <UserDetail></UserDetail>,
                children: [
                    {
                        path: 'comment',
                        element: <Comment></Comment>,
                    },
                ],
            },
        ],
    },
]);
export default Router;
