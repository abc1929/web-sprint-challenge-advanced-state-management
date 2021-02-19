import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <nav className="navbar navbar-dark bg-primary">
         <Link className="navbar-brand" to="/">
            Smurf Village Database
         </Link>

         <div
            style={{
               width: "210px",
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <Link
               to="/"
               style={{
                  backgroundColor: "white",
                  borderRadius: "9px",
                  padding: "6px 12px",
                  textDecoration: "none",
               }}
            >
               Home
            </Link>
            <Link
               to="/search"
               style={{
                  backgroundColor: "white",
                  borderRadius: "9px",
                  padding: "6px 12px",
                  textDecoration: "none",
               }}
            >
               Search Smurf
            </Link>
         </div>
      </nav>
   );
};

export default Header;
