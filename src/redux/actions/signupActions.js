import { deployLink } from '../constants/config.js';
import {
    SIGNUPFORINNOVATOR_FAIL,
    SIGNUPFORINNOVATOR_REQUEST,
    SIGNUPFORINNOVATOR_SUCCESS,
    SIGNUPFORINVESTOR_FAIL,
    SIGNUPFORINVESTOR_REQUEST,
    SIGNUPFORINVESTOR_SUCCESS
} from '../constants/signup.js';
import axios from 'axios';


export const innovatorSignup = (data) => async (dispatch) => {
    dispatch({ type: SIGNUPFORINNOVATOR_REQUEST });
    // console.log(data)
    try {
        const user = await axios.post(`${deployLink}/innovator/signup`, data);
        // console.log(user)
        dispatch({ type: SIGNUPFORINNOVATOR_SUCCESS, payload: user });
    } catch (error) {
        // console.log(error.message)
        dispatch({ type: SIGNUPFORINNOVATOR_FAIL, payload: error });
    }
}

export const investorSignup = (data) => async (dispatch) => {
    // console.log(data)
    dispatch({ type: SIGNUPFORINVESTOR_REQUEST });
    try {
        const user = await axios.post(`${deployLink}/investor/signup`, data);
        // console.log(user)
        dispatch({ type: SIGNUPFORINVESTOR_SUCCESS, payload: user });
    } catch (error) {
        // console.log(error.message)
        dispatch({ type: SIGNUPFORINVESTOR_FAIL, payload: error });
    }
}