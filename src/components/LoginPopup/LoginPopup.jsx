import React, {useState}from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("Login");
// =======================================================

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (currState !== "Login" && inputs.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            newErrors.email = "Valid email is required";
        }

        if (inputs.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted", inputs);
            // Add login/signup logic here
            alert(`${currState} successful!`);
        }
    };






// =======================================================
  return (
    <div className='login-popup'>
        <form className='login-popup-container'onSubmit={handleSubmit}>
            <div className='login-popup-title'>
                  <h2>{currState}</h2>
                  <img onClick={() => setShowLogin(false)} src = {assets.cross_icon} alt = ""/>
            </div>

{/* ==================================================================== */}
            <div className='login-popup-inputs'>
                {/* when it login ===currState hide your name with fragment<></> 
                if it not login it show name  */}
                {/* {
                    currState==="Login"?<></>:  <input type = "text" 
                     placeholder='Your name' 
                    
                     required />
                     
                } */}
                 {currState !== "Login" && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder='Your name'
                                value={inputs.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
                        </>
                    )}



                <input type = "email"  name="email"
                placeholder='Your email' value={inputs.email}
                 onChange={handleChange}
                required 
                />
                {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
                 <input type = "password"  name="password"
                 placeholder='Your Password' 
                 value={inputs.password}
                   onChange={handleChange}
                 required 
                 />
        {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>}

              </div>
 
                 {/* when it is sign-up create account  */}
                 <button>{currState==="Sign Up"?"create account" : "Login"}</button>
 
 {/* =================================================================== */}
           <div className='login-popup-condition'>
            <input type = "checkbox" required />
           <p>By continuing,i agree to the terms of use & privacy policy</p>
            </div>

            {/* =========================================== */}

            {
               currState === "Login"?  <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>
                Click here</span></p>:
               <p>Already have an account?<span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
           
             
        </form>
      
    </div>
  )
}

export default LoginPopup
