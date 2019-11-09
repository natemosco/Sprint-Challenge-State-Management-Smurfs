import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, CREATE_SMURF_START, CREATE_SMURF_SUCCESS, CREATE_SMURF_FAILURE } from "../actions"

const initialState = {
    smurfs: [],
    error: "",
    isFetching: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                error: "",
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case CREATE_SMURF_START:
            return {
                ...state,
                error: "",
                isFetching: true
            }
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case CREATE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))
export { reducer, store }