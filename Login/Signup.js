import styles from "./Signup.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../UI/Modal";

function Signup() {
  let navigate = useNavigate();
  const enteredName = useRef();
  const enteredUsername = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredCPassword = useRef();
  const enteredRole = useRef();
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState("");

  function clearInvalid() {
    setInvalid(false);
  }

  function signupHandeler(event) {
    event.preventDefault();
    console.log("Signup handeller");

    const username = enteredName.current.value;
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    const cpassword = enteredCPassword.current.value;
    const role = enteredRole.current.value;

    const url = "http://localhost:3001/signup?";
    const params = {
      username: username,
      email: email,
      password: password,
      role: role,
    };
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setMsg("Invalid Email");
      console.log(msg);
      setInvalid(true);
      return;
    }
    if (password !== cpassword) {
      setInvalid(true);
      setMsg("Passwords Don't Match");
      return;
    }

    console.log(url + new URLSearchParams(params));

    fetch(url + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.auth) {
          navigate("/");
        } else {
          alert("couldn't signin");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      {invalid && <Modal onClick={clearInvalid}>{msg}</Modal>}
      <div className={styles.background}>
        {/* <p>"Welcome to our Quiz app" */}

        <div className={styles.formBox}>
          <form>
            <div className={styles.header}>
              <h2>Sign Up </h2>
            </div>
            <div className={styles.userInfo}>
              <input
                type="text"
                placeholder="Name"
                ref={enteredName}
                required
              ></input>

              <input
                type="text"
                placeholder="Username"
                ref={enteredUsername}
                required
              ></input>

              <input
                type="text"
                placeholder="Email"
                ref={enteredEmail}
                required
              ></input>

              <input
                type="password"
                placeholder="Password"
                ref={enteredPassword}
                required
              ></input>
              <input
                type="password"
                placeholder="Confirm Password"
                ref={enteredCPassword}
                required
              ></input>

              <select name="Role" ref={enteredRole}>
                <option value="StudentDashboard">Student</option>
                <option value="MentorDash">Mentor</option>
                <option value="AdminDash">Admin</option>
              </select>
            </div>
            {/* <p>Forgot password?</p> */}
            <button onClick={() => navigate("/")}>Login</button>
            <button onClick={signupHandeler}>Sign up</button>
            {/* <button > Already a memeber?  Login</button>
            <button >Sign up</button> */}
          </form>
        </div>
        {/* </p> */}
      </div>
    </>
  );
}
export default Signup;
