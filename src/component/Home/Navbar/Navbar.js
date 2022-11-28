import './Navbar.css';
import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <div className="header">
      <div className="container-fluid">
        <nav className="nav-bar">
          <div className="logo">
          <a className="" href="/">
            {props.title}
          </a></div>
          <div className="menu">
            <ul className="">
              <li className="">
                <a className="" href="/signin">
                  {props.sign}
                </a>
              </li>
              <li className="">
                <a className="" href="/register">
                  {props.register}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  register: PropTypes.string,
  sign: PropTypes.string,
};
Navbar.defaultProps = {
  title: "E-SHOP",
  sign: "Sign In",
  register: "Register",
};
export default Navbar;
