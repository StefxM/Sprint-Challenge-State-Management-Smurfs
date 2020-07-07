import axios from 'axios';


export const NEW_SMURF = 'NEW_SMURF'
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';



const headers = {
    Accept: 'application/json'
};

export const SubmitForm = (form) => dispatch => {
    dispatch({type: NEW_SMURF});
    console.log(form);
    axios
        .post("http://localhost:3333/smurfs", form)
        .then((response) => console.log(response))
        .catch ((error) => console.log(error));
};

export const getSmurf = () => dispatch => {
    dispatch({type:FETCH_SMURF_START});
    axios
        .get("http://localhost:3333/smurfs", {headers})
        .then(res => {
            console.log(res.data);
            dispatch({type:FETCH_SMURF_SUCCESS,payload:res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_SMURF_FAIL,payload:err
            });
        });
};