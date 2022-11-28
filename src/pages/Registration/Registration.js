import "./Registration.css";
function Registration() {
  return (
    <div className="register">
      <div className="register-in">
        <h3>Registration</h3>
        <hr />
        <form action="">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="info">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="info">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="info">
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder="Enter your password" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <label htmlFor="">UserName</label>
                  <input type="text" placeholder="Enter your username" />
                </div>
                <div className="info">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
                <div className="info">
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" placeholder="Confirm your password" />
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
                      female
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
        </form>
        <button className="btn regbtn">Register</button>
      </div>
    </div>
  );
}
export default Registration;
