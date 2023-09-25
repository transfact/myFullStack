import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { App230919,App230919 } from './App/*';
import { App230921, App230922 } from './App/AppAdmin';

//메인이 될곳을 root로 정한것이다. root에서부터 리액트가 시작된다고 말한것이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //
    <>
        <React.StrictMode>
            <App230922 />
        </React.StrictMode>
    </>

    //
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals          <App230921 />
