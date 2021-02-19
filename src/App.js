import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetch_smurf } from "./actions";

class App extends Component {
   constructor() {
      super();
      // storing searchterm for the search functionality on smurfs
      this.state = {
         searchterm: "",
      };
   }

   //GET smurfs on mount
   componentDidMount() {
      this.props.dispatch(fetch_smurf());
   }

   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Header />
               <Route exact path="/">
                  <main>
                     <SmurfList />
                     <AddForm />
                  </main>
               </Route>

               <Route exact path="/search">
                  <input
                     style={{
                        width: "40%",
                        alignSelf: "center",
                        padding: "4px 10px",
                     }}
                     placeholder="Keyword"
                     onChange={(e) =>
                        this.setState({ searchterm: e.target.value })
                     }
                  />
                  <main>
                     <SmurfList searchterm={this.state.searchterm} />
                  </main>
               </Route>

               <Route path="/smurf/:id">
                  <main>
                     <SmurfList />
                  </main>
               </Route>
            </div>
         </BrowserRouter>
      );
   }
}

export default connect((s) => s)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
