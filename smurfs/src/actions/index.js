import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const CREATE_SMURF_START = "CREATE_SMURF_START";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS";
export const CREATE_SMURF_FAILURE = "CREATE_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log("error from get axios", error);
            dispatch({ type: FETCH_SMURF_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })

};
export const createSmurf = (SmurfObj) => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios
        .post("http://localhost:3333/smurfs", SmurfObj)
        .then(response => {
            console.log(response);
            dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data })
        })
        .then(response => {
            getSmurf();
        })
        .catch(error => {
            console.log("error from create axios", error);
            dispatch({ type: CREATE_SMURF_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })

}