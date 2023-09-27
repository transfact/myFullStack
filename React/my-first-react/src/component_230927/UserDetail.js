import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';
import { users } from './User';

export default function UserDetail(props) {
    const { id } = useParams();
    //   queryString가져오기    query string값 할당
    const [searchParams, setSearchParams] = useSearchParams();

    console.log('서치파람', searchParams.get('mode'));

    return (
        <div>
            <h2>{props.checkProp}</h2>
            <span>User Detail</span>
            <div>name : {users[Number(id) - 1].name}</div>
            <Link to="comment">Comment</Link>
            <Outlet context={{ comment: users[Number(id) - 1] }}></Outlet>
            {/* <div>답글 : {users[Number(id) - 1].comment.text}</div> */}
        </div>
    );
}
