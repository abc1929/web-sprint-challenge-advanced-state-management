import React, { useState } from "react";
import { connect } from "react-redux";
import { add_smurf, set_formerror } from "../actions";
import { v4 } from "uuid";

const AddForm = (props) => {
   const [state, setState] = useState({
      name: "",
      position: "",
      nickname: "",
      description: "",
   });

   const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      let err = [];
      for (let i of ["name", "position", "nickname"]) {
         if (state[i].length === 0) {
            err.push(i);
         }
      }
      if (err.length > 0) {
         let errmessage = "";
         switch (err.length) {
            case 1:
               errmessage = err[0] + " cannot be empty";
               break;
            case 2:
               errmessage = err[0] + " and " + err[1] + " cannot be empty";
               break;

            // errors >2
            default:
               errmessage =
                  err.reduce((a, b, i) => {
                     if (i === err.length - 1) {
                        return a + " and " + b;
                     }
                     return a + b + ", ";
                  }, "") + " cannot be empty";
         }

         props.dispatch(set_formerror(errmessage));
      } else {
         setState({
            name: "",
            position: "",
            nickname: "",
            description: "",
         });
         props.dispatch(add_smurf({ ...state, id: v4() }));
         props.dispatch(set_formerror(""));
      }
   };

   return (
      <section>
         <h2>Add Smurf</h2>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label htmlFor="name">Name:</label>
               <br />
               <input
                  onChange={handleChange}
                  value={state.name}
                  name="name"
                  id="name"
               />
            </div>
            <div className="form-group">
               <label htmlFor="position">Position:</label>
               <br />
               <input
                  onChange={handleChange}
                  value={state.position}
                  name="position"
                  id="position"
               />
            </div>
            <div className="form-group">
               <label htmlFor="nickname">Nickname:</label>
               <br />
               <input
                  onChange={handleChange}
                  value={state.nickname}
                  name="nickname"
                  id="nickname"
               />
            </div>
            <div className="form-group">
               <label htmlFor="description">Description:</label>
               <br />
               <textarea
                  onChange={handleChange}
                  value={state.description}
                  name="description"
                  id="description"
               />
            </div>
            {props.formError && (
               <div
                  data-testid="errorAlert"
                  className="alert alert-danger"
                  role="alert"
               >
                  Error: {props.formError}
               </div>
            )}
            <button
            //    onClick={() => }
            >
               Submit Smurf
            </button>
         </form>
      </section>
   );
};

export default connect((s) => {
   return {
      formError: s.formError,
   };
})(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
