import { REMOVE_OWNER } from "../constants/owner";
import { SIGNINFORINNOVATOR_RESET, SIGNINFORINVESTOR_RESET } from "../constants/signin";
import { SIGNUPFORINNOVATOR_RESET, SIGNUPFORINVESTOR_RESET } from "../constants/signup";


export const removeOwner = () => async (dispatch) => {
    dispatch({ type: SIGNUPFORINVESTOR_RESET });
    dispatch({ type: SIGNINFORINVESTOR_RESET });
    dispatch({ type: SIGNUPFORINNOVATOR_RESET });
    dispatch({ type: SIGNINFORINNOVATOR_RESET });
    dispatch({ type: REMOVE_OWNER });
};