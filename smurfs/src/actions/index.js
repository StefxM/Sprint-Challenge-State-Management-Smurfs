import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

const headers = {
    Accept: 'application/json'
};

export const getSmurf = () => dispatch => {
    dispatch({FETCH_SMURF_START});
    axios
        .get("localhost:3333/smurfs", {headers})
        .then(res => {
            console.log(res);
            dispatch({type:FETCH_SMURF_SUCCESS,payload:res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_SMURF_FAIL,payload:err
            });
        });
};