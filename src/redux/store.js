import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { signupInnovatorReducer } from './reducers/signupInnovatorReducer.js';

const initialState = {
    signupInnovator: {
        loading: false
    }
};

const reducer = combineReducers({
    signupInnovator: signupInnovatorReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;