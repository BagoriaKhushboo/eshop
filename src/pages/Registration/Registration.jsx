import "./Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  function handleFormSubmit(event) {

    // console.log(JSON.stringify(user));
    // redirect to login . 
   fetch(
        "http://localhost:4400/api/auth/register",
        {
          method:"POST",
          body:JSON.stringify(user),
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          }
        }
      ).then(
        res=>{
          console.log(res);
          navigate("/signin", {replace: true});
        }).catch(err=>{
          console.log(err);
        });
 
  }
 
  return (
    <div className="register">
      <div className="register-in">
        <h3 className="">Registration</h3>
        <hr />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="info">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter your name"    onInput={(e) => {
                if (!user.name) user.name = {};
                user.name.firstname = e.target.value;
                setUser(user);
              }}
            />
                </div>
                <div className="info">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Enter your email"   onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}
              />
                </div>
                <div className="info">
                  <label htmlFor="">Password</label>
                  <input type="password" placeholder="Enter your password"  onInput={(e) => {
              user.password = e.target.value;
              setUser(user);
            }}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <label htmlFor="">UserName</label>
                  <input type="text" placeholder="Enter your username"  onInput={(e) => {
              user.username = e.target.value;
              setUser(user);
            }}/>
                </div>
                <div className="info">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" placeholder="Enter your phone number"  onInput={(e) => {
              user.phonenumber = e.target.value;
              setUser(user);
            }}/>
                </div>
                <div className="info">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" placeholder="Confirm your password"  onInput={(e) => {
              user.password = e.target.value;
              setUser(user);}}/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="info">
                  <label htmlFor="">Gender</label>
                </div>
                <div className="gender">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Prefer Not to say
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn regbtn" onClick={handleFormSubmit}>Register</button>
      </div>
    </div>
  );
}
export default Registration;
