//context로 받던지 해서 map
import { useSelector, useDispatch } from 'react-redux';
export default function CartItem() {
    const products = useSelector(
        (state) => state.initProduct
        // (left, right) => {
        //     return left.quantity === right.quantity;
        // }
    );
    const dispatch = useDispatch();
    return (
        <div>
            <h2>카트 아이템</h2>
            {products.map((product) => {
                return (
                    product.quantity > 0 && (
                        <li key={product.id}>
                            {product.name} - {product.price}$ - 수량 {product.quantity}
                            <button
                                onClick={() => {
                                    dispatch({ type: 'DEL_CART', id: product.id });
                                }}
                            >
                                장바구니에서 빼기
                            </button>
                        </li>
                    )
                );
            })}
            <h3>
                카트의 가격 :{' '}
                {products.reduce((acc, cur) => {
                    return Number(acc) + Number(cur.price) * Number(cur.quantity);
                }, 0)}
            </h3>
        </div>
    );
}
