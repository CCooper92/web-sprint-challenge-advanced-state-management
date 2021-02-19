import axios from 'axios';

export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_LOADING });

        axios
            .get('http://localhost:3333/smurf')
            .then(res =>{
                dispatch({ type:FETCH_SMURFS_SUCCESS, payload: {name: res.data.name, position: res.data.position, nickname:res.data.nickname, summary: res.data.summary } });
            })
            .catch(err=>{
                dispatch({type:FETCH_SMURFS_FAIL, payload: err.data.error})
            })
    }
}

//adding new smurf
export const addSmurf = ({name, position, nickname, summary}) => {
    return dispatch => {
        dispatch({ type: ADD_SMURF});
        axios
        .post('http://localhost:3333/smurf', { name, position,nickname, summary })
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type:ADD_SMURF_FAIL, payload:err })
        })
    }
}

// export const fetchSmurfsLoading = () => {
//     return({ type:FETCH_SMURF_LOADING});
// }

// export const fetchSmurfSuccess = (smurf) => {
//     return({type:FETCH_SMURF_SUCCESS, payload:smurf});
// }

// export const fetchSmurfFail = (error) => {
//     return({type:FETCH_SMURF_FAIL, payload:error});
// }

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.