import { useState } from 'react';

export default function ToggleFunc() {
    const [status, setStatus] = useState(false);

    const handleToggle = () => {
        status ? setStatus(false) : setStatus(true);
    };

    return (
        <>
            <button type="button" onClick={handleToggle}>
                토글버튼
            </button>

            {/* status true일때만 status 출력 */}
            <h2>{status && '보여라'}</h2>
        </>
    );
}
