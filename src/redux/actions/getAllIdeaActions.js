import axios from "axios";
import { GETALLCATEGORY_REQUEST, GETALLIDEA_FAIL, GETALLIDEA_REQUEST, GETALLIDEA_SUCCESS } from "../constants/getAllIdea";


export const getAllIdea = (filter) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    // console.log(token, 'get all idea actions');

    // console.log('filter query', filter);

    dispatch({ type: GETALLIDEA_REQUEST });

    try {
        const { data } = await axios.get('http://localhost:3000/allIdeas', {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        dispatch({ type: GETALLIDEA_SUCCESS, payload: data });
        // console.log(data, 'get all idea actions success')
    } catch (error) {
        // console.log(error)
        dispatch({ type: GETALLIDEA_FAIL, payload: error });
    }
}

export const getAllCategory = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    console.log(token, 'get category actions');
    dispatch({ type: GETALLCATEGORY_REQUEST });

    try {
        const allCategory = await axios.get('route', {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        console.log(allCategory, 'get all category actions success')
    } catch (error) {
        console.log(error)
    }
};