import React from 'react';
import { useReducer } from 'react';

export default function UseReducer() {
    function reducer(state, action) {
        console.log(state);
        switch (action.type) {
            case '증가':
                return { ...state, count: state.count + 1 };
            case '감소':
                return { ...state, count: state.count - 1 };
            default:
                throw new Error('unknown action type');
        }
    }
    const initialState = { count: 0, hello: 'hi' };
    const [state, dispatch] = useReducer(reducer, initialState);
    //상태가 액션을 받아 새로운 상태를 변환하는 함수임.
    //reducer(state,action)
    return (
        <div>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({ type: '증가' })}>+1</button>
            <button onClick={() => dispatch({ type: '감소' })}>-1</button>
        </div>
    );
}
