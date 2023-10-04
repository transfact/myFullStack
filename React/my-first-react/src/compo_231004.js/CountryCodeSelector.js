import MkContext from './store/mkContext';
import { useContext } from 'react';
export default function CountryCodeSelector() {
    const value = useContext(MkContext);
    console.log(value);
    return (
        <div>
            <h2>현재 countryCode : {value.countryCode}</h2>
            <select
                value={value.countryCode}
                onChange={(e) => {
                    value.setCountryCode(e.target.value);
                }}
            >
                <option value="KR">한국어</option>
                <option value="JP">일본어</option>
                <option value="US">영어</option>
            </select>
        </div>
    );
}

{
    /* <MkContext.Consumer>
{(value) => {
    
    return (
        <div>
            <h2>현재 countryCode : {value.countryCode}</h2>
            <select
                value={value.countryCode}
                onChange={(e) => {
                    value.setCountryCode(e.target.value);
                }}
            >
                <option value="KR">한국어</option>
                <option value="JP">일본어</option>
                <option value="US">영어</option>
            </select>
        </div>
    );
}}
</MkContext.Consumer> */
}
