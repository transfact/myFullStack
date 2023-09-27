import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
    const { name } = useParams();
    const navi = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div>
                학생명은 <span style={{ color: 'green' }}>{name}</span>입니다.
            </div>
            {searchParams.get('name') ? <div>실제이름은 {searchParams.get('name')}입니다.</div> : null}
            <button
                onClick={() => {
                    navi('/');
                }}
            >
                뒤로
            </button>
        </>
    );
}
