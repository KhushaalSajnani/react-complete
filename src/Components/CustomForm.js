import React from 'react';

function CustomForm({labelFor, labelName, inputType, inputValue, onChangeFn}) {

    const handleChange = e => {
        const value = e.target.value;
        onChangeFn(value);
    }

    return (
        <div>
            <label htmlFor={labelFor}>{labelName}</label>
            <input type={inputType} placeholder={labelName} value={inputValue} onChange={handleChange}/>
        </div>
    );
}

export default CustomForm;
