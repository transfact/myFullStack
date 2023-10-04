import { LightContext } from './store/LightDark';

import { useContext } from 'react';

export default function LightInput() {
    const value = useContext(LightContext);
    console.log(value);
    return (
        <>
            <h2>Select Theme</h2>
            <select
                value={value.color}
                onChange={(e) => {
                    value.setColor(e.target.value);
                }}
            >
                <option value="yellow">Light</option>
                <option value="black">Dark</option>
            </select>
        </>
    );
}
