import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const MyContext=createContext(null);

root.render(
    <MyContext.Provider value={{name:'Dima', age:46, pages:[]}}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MyContext.Provider>
);

reportWebVitals();
