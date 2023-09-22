import { useState } from 'react';

export default function DisapperFunc() {
    const [status, setStatus] = useState(false);

    return (
        <>
            <br />
            <button
                type="button"
                onClick={() => {
                    status ? setStatus(false) : setStatus(true);
                }}
            >
                {!status ? '사라져라' : '보여라'}
            </button>

            {/* status true일때만 status 출력 */}
            <h2>{!status && '안녕하세요'}</h2>
        </>
    );
}
