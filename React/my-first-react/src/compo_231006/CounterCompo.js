import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from './store/counterIndex';
export default function CounterCompo() {
    const counterState = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(counterAction.increment());
    };
    const minus = () => {
        dispatch(counterAction.decrement());
    };
    const calch = () => {
        dispatch(counterAction.Hicalc({ num1: 10, num2: -20 }));
    };
    // console.log(counterState.counter);
    return (
        <>
            <h1>카운터</h1>
            <h2>{counterState.counter}</h2>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={() => dispatch(counterAction.increase(10))}>SUPER ADD</button>
            <button onClick={calch}>Calc</button>
        </>
    );
}
