import React from 'react';
import ReactDOM from 'react-dom/client';
import { App231006 } from './App/AppAdmin';
import { Provider } from 'react-redux';
// import store from './compo_231006/store/IndexTodo';
// import carStore from './compo_231006/cart/cart_store/cartStore';
// import { RouterProvider } from 'react-router-dom';
// import Router from './component_230927/PraticeRouter';
// import NavBar from './component_230927/NavBar';
import counterStore from './compo_231006/store';
//메인이 될곳을 root로 정한것이다. root에서부터 리액트가 시작된다고 말한것이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //
    <>
        <React.StrictMode>
            <Provider store={counterStore}>
                <App231006 />
            </Provider>
        </React.StrictMode>
    </>

    //
);

// const input = document.querySelector('input');
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// //상수의 변수
// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// //reducer
// const reducer = (state = [], action) => {
//     console.log(action);
//     switch (action.type) {
//         case ADD_TODO:
//             const newTodo = { text: action.text, id: Date.now() };
//             return [newTodo, ...state];
//         case DELETE_TODO:
//             const remove = state.filter((el) => el.id !== action.id);
//             return remove;
//         default:
//             return state;
//     }
// };
// const store = createStore(reducer);
// //todo 삭제
// const removeTodo = (event) => {
//     event.preventDefault();
//     // console.log(event.target.parentNode.id);
//     // console.log(event);
//     store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
// };
// //store.subscribe(() => console.log(store.getState()));
// //새로운 데이터가 추가될 때 실행
// store.subscribe(() => {
//     const todos = store.getState();
//     ul.innerHTML = '';
//     todos.map((value) => {
//         const li = document.createElement('li');
//         const btn = document.createElement('button');
//         btn.innerText = '삭제';
//         btn.addEventListener('click', removeTodo);
//         li.id = value.id;
//         li.innerText = value.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// });
// //todo 추가
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     store.dispatch({ type: ADD_TODO, text: input.value });
//     input.value = '';
// });

////리덕스를 이용한 숫자증가, 감소 코드
/*
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const num = document.querySelector('#num');
​
const ADD = 'ADD';
const MINUS = 'MINUS';
​
//리듀서
const countReducer = (state = 0, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        case 'HAHAHA':
            return 'ABC';
        default:
            return state;
    }
};
​
//store는 데이터를 넣는곳
//createStore: store생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);
​
//subscribe()는 데이터와 저장소가 변경될때마다 콜백함수를 실행
countStore.subscribe(() => {
    //getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
    num.textContent = countStore.getState();
});
​
add.addEventListener('click', () => {
    countStore.dispatch({ type: ADD });
});
​
minus.addEventListener('click', () => {
    countStore.dispatch({ type: MINUS });
});
​
// countStore.dispatch({ type: 'ADD' });
// countStore.dispatch({ type: 'ADD' });
// countStore.dispatch({ type: 'ADD' });
// countStore.dispatch({ type: 'MINUS' });
// countStore.dispatch({ type: 'HAHAHA' });
​
// console.log(countStore.getState());
​
////자바스크립트를 이용한 숫자증가, 감소 코드
/*
let count = 0;
​
add.addEventListener('click', () => {
    count = count + 1;
    num.textContent = count;
});
​
minus.addEventListener('click', () => {
    count = count - 1;
    num.textContent = count;
});
*/
