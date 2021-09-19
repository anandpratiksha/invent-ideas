import { GETALLIDEA_FAIL, GETALLIDEA_REQUEST, GETALLIDEA_SUCCESS } from "../constants/getAllIdea";

const initialState = {
    loading: false,
};

export const getAllIdeaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLIDEA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GETALLIDEA_SUCCESS:
            return {
                ...state,
                loading: false,
                allIdea: action.payload
            }
        case GETALLIDEA_FAIL:
            return {
                ...state,
                loading: false,
                allIdeaError: action.payload
            }
        default:
            return state;
    }
}

export const getAllCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}