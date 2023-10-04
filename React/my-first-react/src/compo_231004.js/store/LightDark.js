import { useState, createContext } from 'react';
import styled from 'styled-components';

const Theme = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.color ? props.color : 'red')};
`;

export const LightContext = createContext({
    color: 'yellow',
    setColor: () => {},
});
export const LanguageContext = createContext({
    language: 'KR',
    setLanguage: () => {},
});

export default function LightDark({ children }) {
    const [color, setColor] = useState('yellow');
    const [language, setLanguage] = useState('KR');
    console.log(children);
    return (
        <Theme color={color}>
            <div>language : {language}</div>
            <LightContext.Provider value={{ color, setColor }}>{children[0]}</LightContext.Provider>
            <LanguageContext.Provider value={{ language, setLanguage }}>{children[1]}</LanguageContext.Provider>
        </Theme>
    );
}
