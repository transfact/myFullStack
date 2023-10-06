import { useSelector, useDispatch } from 'react-redux';

export default function ProductList() {
    const products = useSelector((state) => state.initProduct);
    const dispatch = useDispatch();
    return (
        <>
            <h2>시장</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            {product.name} - {product.price}$
                            <button
                                onClick={() => {
                                    dispatch({ type: 'ADD_CART', id: product.id });
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
