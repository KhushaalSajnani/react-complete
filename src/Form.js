import React, {useReducer} from 'react';

const CONSTANTS = {
    FIRST_NAME: "firstname",
    LAST_NAME: "lastname",
    DOB: "dob",
    PHONE: "phone",
    RESET_FORM:"reset"
}

const reducerFunction = (state,action) => {
    switch (action.type){
        case CONSTANTS.FIRST_NAME:
            return{
                ...state,
                fname: action.payload
            };
        case CONSTANTS.LAST_NAME:
            return{
                ...state,
                lname: action.payload
            };
        case CONSTANTS.PHONE:
            return{
                ...state,
                phone: action.payload
            };
        case CONSTANTS.DOB:
            return{
                ...state,
                dob: action.payload
            };
        case CONSTANTS.RESET_FORM:
            return {
                fname:'',
                lname:'',
                phone:'',
                dob:''
            }
        default:
            throw new Error("Incorrect action type "+action.type);
    }
}
function Form({onReceivedData}) {


    const [state,dispatch] = useReducer(reducerFunction,{
        fname:'',
        lname:'',
        phone:'',
        dob:''
    })

    const handleFnameChange = e => {
        const firstName = e.target.value;
        dispatch({type: CONSTANTS.FIRST_NAME, payload:firstName});
    }
    const handleLnameChange = e => {
        const lastName = e.target.value;
        dispatch({type: CONSTANTS.LAST_NAME, payload:lastName});
    }
    const handlePhoneChange = e => {
        const phone = e.target.value;
        dispatch({type: CONSTANTS.PHONE, payload:phone});
    }
    const handleDobChange = e => {
        const dob = e.target.value;
        dispatch({type: CONSTANTS.DOB, payload:dob});
    }

    const handleSubmit = e => {
        e.preventDefault();
        onReceivedData(state);
        dispatch({type: CONSTANTS.RESET_FORM})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        value={state.fname}
                        onChange={handleFnameChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        value={state.lname}
                        onChange={handleLnameChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        id="phone"
                        value={state.phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div>
                    <label htmlFor="dob">First Name</label>
                    <input
                        type="datetime-local"
                        placeholder="Date"
                        id="dob"
                        value={state.dob}
                        onChange={handleDobChange}
                    />
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default Form;
