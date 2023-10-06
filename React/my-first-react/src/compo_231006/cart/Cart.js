//cartItem의 부모로서, 부모역할
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function Cart() {
    return (
        <>
            <ProductList></ProductList>
            <CartItem></CartItem>
        </>
    );
}
