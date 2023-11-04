import React from 'react';
import {useContext} from "react";
import {MyAppContext} from "./Context/AppContext";

function App(props) {

    const appCtx = useContext(MyAppContext)
    appCtx.updateUsername("khushaal-CTX-Test")

    return (
        <div>Appppppp => {appCtx.name} </div>
    );
}

export default App;
