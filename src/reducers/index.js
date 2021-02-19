import {
   FETCH_SMURF_START,
   FETCH_SMURF_SUCCESS,
   FETCH_SMURF_FAILURE,
   ADD_SMURF_START,
   ADD_SMURF_SUCCESS,
   ADD_SMURF_FAILURE,
   SET_FORMERROR,
} from "../actions";

export const initialState = {
   smurfs: [
      // {
      //    description:
      //       "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
      //    id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      //    name: "Poppa Smurf",
      //    nickname: "Pops",
      //    position: "Village Leader",
      // },
      // {
      //    description:
      //       "Smurfette's role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.",
      //    id: "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
      //    name: "Smurfette",
      //    nickname: "Smurfette",
      //    position: "Beautician",
      // },
   ],
   isFetching: false,
   networkError: "",
   formError: "", // not using an object here since we display just one line of error, the message content is generated accordingly inline
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_SMURF_START:
         return { ...state, isFetching: true, networkError: "" };

      case FETCH_SMURF_SUCCESS:
         return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            networkError: "",
         };
      case FETCH_SMURF_FAILURE:
         return { ...state, isFetching: false, networkError: action.payload };

      case ADD_SMURF_START:
         return {
            ...state,
            isFetching: true,
            networkError: "",
         };
      case ADD_SMURF_SUCCESS:
         return {
            ...state,
            isFetching: false,
            networkError: "",
         };
      case ADD_SMURF_FAILURE:
         return {
            ...state,
            isFetching: false,
            networkError: action.payload,
         };

      case SET_FORMERROR:
         return {
            ...state,
            isFetching: false,
            formError: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
