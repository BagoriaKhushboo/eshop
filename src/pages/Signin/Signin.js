import "./Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [loginuser, setLoginUser] = useState({});
  const navigate = useNavigate();
  const handleSignIn=()=>{
    fetch(
      "http://localhost:4400/api/logg/login",
      {
        method:"POST",
        body:JSON.stringify(loginuser),
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      }
    ).then(
      res=>{
        console.log(res);
        navigate("/", {replace: true});
      }).catch(err=>{
        console.log(err);
      });
  }
  return (
   


  <div className="log">
    <div className="login">
      <div className="user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
      <div className="login-in">
        <div>
        <input type="text" placeholder="Username" onInput={(e) => {
              loginuser.username = e.target.value;
              setLoginUser(loginuser);
            }} />
        <input type="password" placeholder="Password" onInput={(e) => {
             loginuser.password = e.target.value;
             setLoginUser(loginuser);
            }}/>
        </div>
        <button className="btn btblue" onClick={handleSignIn} >Sign In</button>
      </div>
    </div>
    </div>
   
  );
}
export default SignIn;
