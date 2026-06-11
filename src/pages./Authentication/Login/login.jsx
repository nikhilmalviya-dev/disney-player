import { useAuth } from "../../../Context/Auth-context";
import { useState , useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Componant/Navbar/Navbar";
import { LoginValidChecker } from "../../../styless/passwordChecker"


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { LoginPage, Login } = useAuth();
  const [error, setError] = useState({ isError: true })
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });



  useEffect(() => {
    if (!error.isError) {
      LoginPage(loginDetail);
    }
},[error]);


useEffect(() => {
  if (Login.user && location.state !== null) {
      navigate(location.state.pathname)
  }
}, [Login, error]);



  const loginHandler = () => {
    const guestDetail = { email: "nikmalviya422@gmail.com", password: "nikhil@123" };
    setLoginDetail(guestDetail);
    LoginPage(guestDetail);
  };


  const inputHandler = (e) => {
    const { name, value } = e;
    setLoginDetail({ ...loginDetail, [name]: value })
}

  const clickHandler = async () => {
    const error = LoginValidChecker(loginDetail);
    setError(error)
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container flex-center">
        <div className="auth-contain flex-column align-center gap-10px padding-17p">
          <h2>Login</h2>
          <label htmlFor="email">
            Enter your Email
            <input
              type="email"
              name="email"
              value={loginDetail.email}
              required
              placeholder="Enter your Email"
              onChange={(e) => inputHandler(e.target)}
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.email && <div className="wrong-input">{error.email}</div>}

          <label htmlFor="password">
            Enter your password
            <input
              type="password"
              name="password"
              value={loginDetail.password}
              required
              onChange={(e) => inputHandler(e.target)}
              placeholder="Enter your Password"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.password && <div className="wrong-input">{error.password}</div>}

          <label htmlFor="remember" className="checkbox-remember-label">
            <input type="checkbox" id="remember" /> Remember me
          </label>
          <button
            className="loginbtn-createAcount padding-4px font-18p"
            onClick={clickHandler}
          >
            Login
          </button>
          <button
            className="login-guest font-16p padding-4px"
            onClick={loginHandler}
          >
            Login as Guest
          </button>
          <Link to="/signup">
            <button className="createBtn-alreadyBtn padding-8p">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
