import React from "react";
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App=()=>{
  
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>




    
  )
}
export default App;