import React, {useReducer} from 'react';
import CustomForm from "./Components/CustomForm";

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
        // const firstName = e.target.value;
        dispatch({type: CONSTANTS.FIRST_NAME, payload:e});
    }
    const handleLnameChange = e => {
        // const lastName = e.target.value;
        dispatch({type: CONSTANTS.LAST_NAME, payload:e});
    }
    const handlePhoneChange = e => {
        // const phone = e.target.value;
        dispatch({type: CONSTANTS.PHONE, payload:e});
    }
    const handleDobChange = e => {
        // const dob = e.target.value;
        dispatch({type: CONSTANTS.DOB, payload:e});
    }

    const handleSubmit = e => {
        e.preventDefault();
        onReceivedData(state);
        dispatch({type: CONSTANTS.RESET_FORM})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CustomForm labelFor={"firstname"} labelName={"First Name"} inputType={"text"} inputValue={state.fname} onChangeFn={handleFnameChange} />
                <CustomForm labelFor={"lastname"} labelName={"Last Name"} inputType={"text"} inputValue={state.lname} onChangeFn={handleLnameChange} />
                <CustomForm labelFor={"phone"} labelName={"Phone Number"} inputType={"text"} inputValue={state.phone} onChangeFn={handlePhoneChange} />
                <CustomForm labelFor={"dob"} labelName={"Date"} inputType={"datetime-local"} inputValue={state.dob} onChangeFn={handleDobChange} />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default Form;
