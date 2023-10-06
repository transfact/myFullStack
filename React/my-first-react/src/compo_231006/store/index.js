import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from './counterIndex';
import LogInReducer from './logInIndex';

const initLoginState = {
    isLogin: false,
};
const loginSlice = createSlice({
    name: 'login',
    initialState: initLoginState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
    },
});

const counterStore = configureStore(
    {
        reducer: { counter: countReducer, login: LogInReducer },
    },
    composeWithDevTools
);

export default counterStore;
