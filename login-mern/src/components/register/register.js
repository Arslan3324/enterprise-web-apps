import React from "react";
import "./register.css"

const Register = ()=>{
    return(
        <div className="register">
        <h1>Register</h1>
        <input type="text" placeholder="your Name" />
        <input type="text" placeholder="your Email" />
        <input type="password" placeholder="your password" />
        <input type="password" placeholder="Re-enter password" />
        <div className="button" >Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}


export default Register;