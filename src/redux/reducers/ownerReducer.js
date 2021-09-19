import { REMOVE_OWNER, UPDATE_OWNER } from "../constants/owner";

const initialState = {
    user: ''
}

export const removeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_OWNER:
            // console.log('reducer-', state, 'payload', action.payload)
            return {
                ...state,
                user: action.payload,
            };
        case REMOVE_OWNER:
            return {
                ...state,
                user: ''
            };
        default:
            return state;
    }
}