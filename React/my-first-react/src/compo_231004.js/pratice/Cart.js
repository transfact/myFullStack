//cartItem의 부모로서, 부모역할
import { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
export const ProductsContext = createContext({
    bag: [],
    products: [],
    setBag: () => {},
});

export const BagsContext = createContext({
    bag: [],
    setBag: () => {},
});

export default function Cart(props) {
    const [products, setProducts] = useState([]);
    const [bag, setBag] = useState([]);
    useEffect(() => {
        console.log('INIT');
        setProducts([
            { id: 1, name: '새콤달콤', price: 500 },
            { id: 2, name: '마이쭈', price: 800 },
            { id: 3, name: '와우', price: 500 },
        ]);

        setBag([
            { id: 1, name: '새콤달콤', price: 500, quantity: 0 },
            { id: 2, name: '마이쭈', price: 800, quantity: 0 },
            { id: 3, name: '와우', price: 500, quantity: 0 },
        ]);
    }, []);
    return (
        <>
            <ProductsContext.Provider value={{ products, bag, setBag }}>{props.children[0]}</ProductsContext.Provider>
            <BagsContext.Provider value={{ bag, setBag }}>{props.children[1]}</BagsContext.Provider>
        </>
    );
}
