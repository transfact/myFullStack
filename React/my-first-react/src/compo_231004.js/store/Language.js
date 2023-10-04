import { useState, createContext } from 'react';
import styled from 'styled-components';

export default function Language({ children }) {
    const [language, setLanguage] = useState('KR');
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
