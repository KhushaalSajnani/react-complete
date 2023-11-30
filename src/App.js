import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers} from "./Store";

function App() {

    const state = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if(state.error!==null){
        return (
            <>
                Error in Fetch!
            </>
        )
    }

    if(state.isLoading){
        return <div>Loading.....</div>
    }

    return (
        <div>
            {state.data.map(user=> <div> Hello from Redux Mr. {user.name}!! </div> )}
        </div>
    );
}

export default App;