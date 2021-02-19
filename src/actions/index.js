import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const SET_FORMERROR = "SET_FORMERROR";

export const fetch_smurf = () => (dispatch) => {
   axios
      .get("http://localhost:3333/smurfs")
      .then((res) =>
         dispatch({
            type: FETCH_SMURF_SUCCESS,
            payload: res.data,
         })
      )
      .catch((err) =>
         dispatch({ type: FETCH_SMURF_FAILURE, payload: String(err) })
      );

   dispatch({ type: FETCH_SMURF_START });
};

export const add_smurf = (data) => (dispatch) => {
   // after sucessful posting, we fetch again to update our smurf state, instead of updating state locally. I suppose this avoids possible conflicts in the long run.
   axios
      .post("http://localhost:3333/smurfs", data)
      .then((res) => {
         dispatch(fetch_smurf());
         dispatch({
            type: ADD_SMURF_SUCCESS,
         });
      })
      .catch((err) =>
         dispatch({ type: ADD_SMURF_FAILURE, payload: String(err) })
      );

   dispatch({ type: ADD_SMURF_START });
};

export const set_formerror = (error) => {
   return { type: SET_FORMERROR, payload: error };
};
