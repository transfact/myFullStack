// import FormCompo from '../compo_231004.js/FormCompo';
// import HookFormPratice from '../compo_231004.js/HookFormPratice';

// import MkContext from '../compo_231004.js/store/mkContext';
// import { ContextProvider } from '../compo_231004.js/store/mkContext';
// import CountryCodeSelector from '../compo_231004.js/CountryCodeSelector';
import { useState } from 'react';
import React from 'react';
import LightDark from '../compo_231004.js/store/LightDark';
import LightInput from '../compo_231004.js/LightInput';
import LanguageInput from '../compo_231004.js/LanguageInput';

import ProductList from '../compo_231004.js/pratice/ProductList';
import Cart from '../compo_231004.js/pratice/Cart';
import CartItem from '../compo_231004.js/pratice/CartItem';
function App231004() {
    return (
        <>
            <Cart>
                <ProductList />
                <CartItem />
            </Cart>
        </>
    );
}

export default React.memo(App231004);
{
    /* <ContextProvider>
<CountryCodeSelector />
</ContextProvider> */
}
