import { useContext } from 'react';
import { ProductsContext } from './Cart';
export default function ProductList() {
    const value = useContext(ProductsContext);
    return (
        <>
            <h2>시장</h2>
            <ul>
                {value.products.map((product) => {
                    return (
                        <li key={product.name}>
                            {product.name} - {product.price}$
                            <button
                                onClick={() => {
                                    console.log(value.bag);
                                    value.bag[product.id - 1].quantity += 1;
                                    value.setBag([...value.bag]);
                                }}
                            >
                                장바구니에 넣기
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
