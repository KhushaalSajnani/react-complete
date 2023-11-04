import React from 'react';
import Form from "./Form";

function App(props) {

    const receivedData = data => {
        console.log(JSON.stringify(data));
    }

    return (
        <div>
            <Form onReceivedData={receivedData}/>
        </div>
    );
}

export default App;
