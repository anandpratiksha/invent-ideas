import {
    INNOVATORFORM1_FAIL,
    INNOVATORFORM1_REQUEST,
    INNOVATORFORM1_SUCCESS,
    INNOVATORFORM2_FAIL,
    INNOVATORFORM2_REQUEST,
    INNOVATORFORM2_SUCCESS,
    INNOVATORFORM3_FAIL,
    INNOVATORFORM3_REQUEST,
    INNOVATORFORM3_SUCCESS
} from "../constants/innovatorForm";

const initialState = {
    loading: false,
}

export const innnovatorForm1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INNOVATORFORM1_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case INNOVATORFORM1_SUCCESS:
            return {
                ...state,
                loading: false,
                form1: action.payload,
            }
        case INNOVATORFORM1_FAIL:
            return {
                ...state,
                loading: false,
                form1Error: action.payload,
            }
        default:
            return state;
    }
}

export const innnovatorForm2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INNOVATORFORM2_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case INNOVATORFORM2_SUCCESS:
            return {
                ...state,
                loading: false,
                form2: action.payload,
            }
        case INNOVATORFORM2_FAIL:
            return {
                ...state,
                loading: false,
                form2Error: action.payload,
            }
        default:
            return state;
    }
}

export const innnovatorForm3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INNOVATORFORM3_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case INNOVATORFORM3_SUCCESS:
            return {
                ...state,
                loading: false,
                form3: action.payload,
            }
        case INNOVATORFORM3_FAIL:
            return {
                ...state,
                loading: false,
                form3Error: action.payload,
            }
        default:
            return state;
    }
}