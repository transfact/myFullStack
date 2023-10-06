import { createStore } from 'redux';

//상수의 변수
export const ADD_CART = 'ADD_CART';
export const DEL_CART = 'DEL_CART';
//reducer

const initState = {
    initProduct: [
        { id: 0, name: '새콤달콤', price: 500, quantity: 0 },
        { id: 1, name: '마이쭈', price: 800, quantity: 0 },
        { id: 2, name: '와우', price: 500, quantity: 0 },
    ],
};
const reducer = (state = initState, action) => {
    //액션을 건네줘야함.
    switch (action.type) {
        case ADD_CART:
            state.initProduct[action.id].quantity += 1;
            return { initProduct: [...state.initProduct] };
        case DEL_CART:
            state.initProduct[action.id].quantity -= 1;
            return { initProduct: [...state.initProduct] };
        default:
            return { initProduct: [...state.initProduct] };
    }
};
const carStore = createStore(reducer);

export default carStore;
