import React from 'react';
import ReactDOM from 'react-dom/client';
import { App230927 } from './App/AppAdmin';

import { RouterProvider } from 'react-router-dom';
import Router from './component_230927/PraticeRouter';
import NavBar from './component_230927/NavBar';

//메인이 될곳을 root로 정한것이다. root에서부터 리액트가 시작된다고 말한것이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //
    <>
        <React.StrictMode>
            <RouterProvider router={Router}></RouterProvider>
        </React.StrictMode>
    </>

    //
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals          <App230921 />
