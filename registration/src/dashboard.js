import React from "react";
import axios from "axios";
import {useLocation,useNavigate} from 'react-router-dom';

const Dashboard=()=>{
    let location=useLocation();
    let navigate=useNavigate();
    var uname=location.state.username;
    return(
        <div className="dash">
                
                    <h2>welcome &nbsp; <span className="word">{uname}</span>&nbsp;to dashboard!!</h2>
                
        </div>
    )
}
export default Dashboard;