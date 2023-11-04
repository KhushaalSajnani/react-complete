import {createContext, useState} from "react";

export const MyAppContext = createContext();

function AppContext({children}) {
    const [name,setName] = useState('');

    const ctxValues = {
        name:name,
        updateUsername: (newName) => {
            setName(newName);
        }
    }

    return(
        <MyAppContext.Provider value={ctxValues}>
            {children}
        </MyAppContext.Provider>
    )
}

export default AppContext;

