
import React, { useState } from "react";
import {useLocation,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Admin from "./components/admin";
import userEvent from "@testing-library/user-event";
  
function App({checkForLoggedIn = false}) {
   let isTrue = false;
  //  if(checkForLoggedIn) {
  //    isTrue = checkForLoggedIn;
  //  }
  return (
      <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        {isTrue} && <Route exact path="/admin" element={ <Admin /> } /> 
      </Routes>
      </Router>
      </>
  );
}
  
export default App;