import styles from "./Login.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../images/login.png";
function Login() {
  let navigate = useNavigate();
  const enteredUsername = useRef();
  const enteredPass = useRef();
  const enteredRole = useRef();
  // const saveVariable = () => {
 // Use localStorage or sessionStorage
  // };
  function loginHandler(event) {
    event.preventDefault();
    const uname = enteredUsername.current.value;
    const pass = enteredPass.current.value;
    const role = enteredRole.current.value;
    sessionStorage.setItem('username', uname);
    console.log("Is this even working?");

    const url = "http://localhost:3001/login?";
    const params = {
      uname: uname,
      pass: pass,
      role: role,
    };

    console.log(url + new URLSearchParams(params));

    fetch(url + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.auth) {
          navigate(data.nav);
        }
        else{
          alert("login failed");
        }
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
        alert("Couldn't login");
      });

    console.log("Login handeller");
  }
  return (
    <div className={styles.loginPage}>
      <img src={login} className={styles.backImg} />
      <div className={styles.loginBox}>
        <form>
          <div className={styles.header}>
            <h2>Welcome Back!</h2>
          </div>
          <div className={styles.userInfo}>
            <input
              type="text"
              placeholder="Username"
              ref={enteredUsername}
            ></input>
            <input
              type="password"
              placeholder="Password"
              ref={enteredPass}
              required
            ></input>

            <select name="Role" ref={enteredRole}>
              <option value="StudentDashboard">Student</option>
              <option value="MentorDash">Mentor</option>
              <option value="AdminDash">Admin</option>
            </select>
            <p>Forgot password?</p>
            <button className={styles.btn} onClick={loginHandler}>
              Login
            </button>
            <button
              className={styles.btn}
              onClick={() => navigate("/SignupTest")}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
