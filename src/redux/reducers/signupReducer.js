import {
    SIGNUPFORINNOVATOR_FAIL,
    SIGNUPFORINNOVATOR_REQUEST,
    SIGNUPFORINNOVATOR_RESET,
    SIGNUPFORINNOVATOR_SUCCESS,
    SIGNUPFORINVESTOR_FAIL,
    SIGNUPFORINVESTOR_REQUEST,
    SIGNUPFORINVESTOR_RESET,
    SIGNUPFORINVESTOR_SUCCESS
} from "../constants/signup";


export const signupInnovatorReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case SIGNUPFORINNOVATOR_REQUEST:
            // console.log('loading', action, state)
            return {
                ...state,
                loading: true,
            }
        case SIGNUPFORINNOVATOR_SUCCESS:
            // console.log('success', action, state)
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SIGNUPFORINNOVATOR_FAIL:
            // console.log('fail', action, state)
            return {
                ...state,
                loading: false,
                userError: action.payload
            }
        case SIGNUPFORINNOVATOR_RESET:
            return {
                loading: false,
            }
        default:
            return state;
    }
}

export const signupInvestorReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case SIGNUPFORINVESTOR_REQUEST:
            // console.log('loading', action, state)
            return {
                ...state,
                loading: true,
            }
        case SIGNUPFORINVESTOR_SUCCESS:
            // console.log('success', action, state)
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SIGNUPFORINVESTOR_FAIL:
            // console.log('fail', action, state)
            return {
                ...state,
                loading: false,
                userError: action.payload
            }
        case SIGNUPFORINVESTOR_RESET:
            return {
                loading: false,
            }
        default:
            return state;
    }
}