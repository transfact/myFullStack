import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const initCounterState = {
    counter: 0,
};

//createSlice() reduce와 액션같이 생성
const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        Hicalc(state, action) {
            const { num1, num2 } = action.payload;
            state.counter += num1 + num2;
        },
    },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
