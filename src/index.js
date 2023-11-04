import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./Context/AppContext";



const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <AppContext>
        <App />
    </AppContext>
)
