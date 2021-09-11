import { deployLink } from '../constants/config.js';
import { SIGNUPFORINNOVATOR_FAIL, SIGNUPFORINNOVATOR_REQUEST, SIGNUPFORINNOVATOR_SUCCESS } from '../constants/signup.js';
import axios from 'axios';


export const innovatorSignup = (data) => async (dispatch) => {
    dispatch({ type: SIGNUPFORINNOVATOR_REQUEST });
    console.log(data)
    try {
        const user = await axios.post(`https://inventideas.herokuapp.com/innovator/signup`, data);
        console.log(user)
        dispatch({ type: SIGNUPFORINNOVATOR_SUCCESS, payload: user });
    } catch (error) {
        console.log(error.message)
        dispatch({ type: SIGNUPFORINNOVATOR_FAIL, payload: error });
    }
}

export const investorSignup = (data) => (dispatch) => {
    console.log(data)
}