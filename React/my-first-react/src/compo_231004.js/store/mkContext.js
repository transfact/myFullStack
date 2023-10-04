import { createContext, useState } from 'react';
import React from 'react';
import CountryCodeSelector from '../CountryCodeSelector';

//createContext() : provider와 consumer 두개의 컴포넌트를 반환
const MkContext = createContext({
    countryCode: 'KR',
    abc: 0,
    setLanguage: () => {},
});

export function ContextProvider({ children }) {
    const [countryCode, setCountryCode] = React.useState('KR');
    return <MkContext.Provider value={{ countryCode, setCountryCode }}>{children}</MkContext.Provider>;
}
export default MkContext;
