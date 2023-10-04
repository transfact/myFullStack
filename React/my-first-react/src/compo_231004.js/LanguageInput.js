import { LanguageContext } from './store/LightDark';

import { useContext } from 'react';

export default function LanguageInput() {
    const value = useContext(LanguageContext);
    console.log(value);
    return (
        <>
            <h2>Select language</h2>
            <select
                value={value.language}
                onChange={(e) => {
                    value.setLanguage(e.target.value);
                }}
            >
                <option value="KR">KR</option>
                <option value="EN">EN</option>
            </select>
        </>
    );
}
