import { SIGNUPFORINNOVATOR_FAIL, SIGNUPFORINNOVATOR_REQUEST, SIGNUPFORINNOVATOR_SUCCESS } from "../constants/signup";


export const signupInnovatorReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case SIGNUPFORINNOVATOR_REQUEST:
            // console.log('loading', action, state)
            return {
                ...state,
                loading: true,
            }
        case SIGNUPFORINNOVATOR_SUCCESS:
            console.log('success', action, state)
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SIGNUPFORINNOVATOR_FAIL:
            console.log('fail', action, state)
            return {
                ...state,
                loading: false,
                userError: action.payload
            }
        default:
            return state;
    }
}