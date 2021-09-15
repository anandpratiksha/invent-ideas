import { deployLink } from '../constants/config.js';
import axios from 'axios';
import {
    SIGNINFORINNOVATOR_FAIL,
    SIGNINFORINNOVATOR_REQUEST,
    SIGNINFORINNOVATOR_SUCCESS,
    SIGNINFORINVESTOR_FAIL,
    SIGNINFORINVESTOR_REQUEST,
    SIGNINFORINVESTOR_SUCCESS
} from '../constants/signin.js';

export const innovatorSignin = (data) => async (dispatch) => {
    dispatch({ type: SIGNINFORINNOVATOR_REQUEST });
    try {
        const user = await axios.post(`${deployLink}/innovator/login`, data);
        // console.log(user, 'signin-innovator')
        dispatch({ type: SIGNINFORINNOVATOR_SUCCESS, payload: user });
    } catch (error) {
        // console.log(error, 'signin-innovator')
        dispatch({ type: SIGNINFORINNOVATOR_FAIL, payload: error })
    }
}

export const investorSignin = (data) => async (dispatch) => {
    dispatch({ type: SIGNINFORINVESTOR_REQUEST });
    // console.log(data, 'signin-investor')
    try {
        const user = await axios.post(`${deployLink}/investor/login`, data);
        // console.log(user, 'signin-investor')
        dispatch({ type: SIGNINFORINVESTOR_SUCCESS, payload: user });
    } catch (error) {
        // console.log(error, 'signin-investor')
        dispatch({ type: SIGNINFORINVESTOR_FAIL, payload: error })
    }
}