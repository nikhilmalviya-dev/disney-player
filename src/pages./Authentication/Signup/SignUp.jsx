import {Link} from "react-router-dom";
import {useEffect , useState} from "react";
import Navbar from "../../../Componant/Navbar/Navbar";
import { SignupValidChecker } from "../../../styless/passwordChecker";
import {useAuth} from "../../../Context/Auth-context";
import "../Login/login.css";

const Signup=()=>{
  const [error, setError] = useState({ isError: true });
  const [userDetail, setUserDetail] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: ""
  });

  const {SignupPage }= useAuth();

  useEffect(() => {
    if (!error.isError) {
        SignupPage(userDetail);
    }
}, [error]);



  const inputHandler = (e) => {
    const { name, value } = e;
    setUserDetail({ ...userDetail, [name]: value });
};

  const handleCreateAccount=()=>{
    const error = SignupValidChecker(userDetail);
    setError(error);
  }


    return(
      <div>
      <Navbar/>
        <div className="auth-container flex-center">
        <div className="auth-contain flex-column align-center gap-10px padding-8p">
          <h2>Sign-up</h2>
          <label htmlFor="email">
            Email Address
            <input
              type="email"
              onChange={e => inputHandler(e.target)}
              placeholder="abcd@gmail.com"
              name="email"
              required
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.email && <div className="wrong-input">{error.email}</div>}
          <label htmlFor="First Name">
            First Name
            <input
              type="text"
              onChange={e => inputHandler(e.target)}
              placeholder="First Name"
              name="firstName"
              required
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.firstname && <div className="wrong-input">{error.firstname}</div>}
          <label htmlFor="Last Name">
            Last Name
            <input
              type="text"
              onChange={e => inputHandler(e.target)}
              placeholder="Last Name"
              required
              name="lastName"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.lastname && <div className="wrong-input">{error.lastname}</div>}
          <label htmlFor="New password">
            New Password
            <input
              type="password"
              onChange={e => inputHandler(e.target)}
              name="password"
              required
              placeholder="*********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.password && <div className="wrong-input">{error.password}</div>}

          <label htmlFor=" Confirm password">
            Confirm Password
            <input
              type="password"
              onChange={e => inputHandler(e.target)}
              name="confirmpassword"
              required
              placeholder="**********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </label>
          {error.confirmpassword && <div className="wrong-input">{error.confirmpassword}</div>}
          <label htmlFor="terms" className="checkbox-remember-label">
            <input type="checkbox" id="terms" /> I accept all Terms & Conditions
          </label>
          <button className="loginbtn-createAcount font-18p" onClick={handleCreateAccount}>Create New Account</button>
          <Link to="/login">
          <button className="createBtn-alreadyBtn padding-8p">Already have an Account </button>
          </Link>
        </div>
      </div>
      </div>
    );
  
}
export default Signup;