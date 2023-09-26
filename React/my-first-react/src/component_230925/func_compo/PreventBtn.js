//사용자가 버튼2번 못누르게 하는 예제

import { useState, useRef } from 'react';

export default function PreventBtn() {
    const lasttime = useRef(null);
    const handleSubmit = () => {
        const now = Date.now();
        //마지막 클릭후 1초이내 클릭시 무시
        if (lasttime.current && now - lasttime.current < 1000) {
            alert('더블클릭!');
            return;
        }
        lasttime.current = now;
    };

    return (
        <>
            <button onClick={handleSubmit}>제출</button>
        </>
    );
}
