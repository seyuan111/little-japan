import React, {useState} from 'react'
import '../seperateCSS/LoginPopup.css'
import { FaTimes } from "react-icons/fa";

const LoginPopup = ({setShowLogin}) => {

    const [current, setCurrent] = useState("Login")

  return (
    <div className="popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{current}</h2>
                <span onClick={()=> setShowLogin(false)}><FaTimes /></span>
            </div>
            <div className="login-popup-inputs">
                {current === "Login"?<></>:<input type="text" placeholder="username" required></input>}
                <input type="email" placeholder="email" required></input>
                <input type="password" placeholder="password" required></input>
            </div>
            <button>{current==="Sign Up" ? "CreateAccount": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required></input>
                <p>I agree to the terms and conditions</p>
            </div>
            {current==="Login"?<p>Create a new Account?<span onClick={() => setCurrent("Sign Up")}>click here</span></p>:<p>already have an account?<span onClick={() => setCurrent("Login")}>login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup