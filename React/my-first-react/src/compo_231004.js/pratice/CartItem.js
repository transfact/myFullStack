//context로 받던지 해서 map
import { useContext } from 'react';
import { BagsContext } from './Cart';

export default function CartItem() {
    const value = useContext(BagsContext);
    return (
        <div>
            <h2>카트 아이템</h2>
            {value.bag.map((product) => {
                return (
                    product.quantity > 0 && (
                        <li key={product.id}>
                            {product.name} - {product.price}$ - 수량 {product.quantity}
                            <button
                                onClick={() => {
                                    if (value.bag[product.id - 1].quantity > 0) {
                                        value.bag[product.id - 1].quantity -= 1;
                                        value.setBag([...value.bag]);
                                    } else {
                                        alert('수량은 음수가 될 수 없습니다!');
                                    }
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
                {value.bag.reduce((acc, cur) => {
                    return Number(acc) + Number(cur.price) * Number(cur.quantity);
                }, 0)}
            </h3>
        </div>
    );
}
