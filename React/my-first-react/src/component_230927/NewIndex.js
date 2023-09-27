import Header from './Header';
import { Outlet } from 'react-router-dom';
export default function NewIndex() {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    );
}
