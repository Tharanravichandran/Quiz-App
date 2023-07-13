import styles from "./SignupTest.module.css";
import grass from "../../images/grass.png";
import insta from "../../images/instagram.png";
import gmail from "../../images/gmail.png";
import twt from "../../images/twitter.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
function SignupTest() {
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
    console.log("from clear");
  }

  function signupHandeler(event) {
    event.preventDefault();

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
      setInvalid(true);
      return;
    }
    if (password !== cpassword) {
      setMsg("Passwords Don't Match");
      setInvalid(true);

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
      <div className={styles.cover}>
        {invalid && <Modal onClick={clearInvalid}>{msg}</Modal>}

        <div className={styles.container}>
          <h1>Signup</h1>
          <form>
            <div className={styles.gridContainer}>
              <div className={styles.left}>
                <input
                  type="text"
                  placeholder="Name"
                  ref={enteredName}
                  required
                ></input>

                <input
                  type="text"
                  placeholder="Email"
                  ref={enteredEmail}
                  required
                ></input>

                <input
                  type="text"
                  placeholder="Username"
                  ref={enteredUsername}
                  required
                ></input>
              </div>

              <div className={styles.right}>
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
            </div>
            <div className={styles.logoContainer}>
              <img src={insta} className={styles.logo}></img>
              <img src={twt} className={styles.logo} />
              <img src={gmail} className={styles.logo} />
            </div>
            <button className={styles.login} onClick={signupHandeler}>
              {" "}
              Log In
            </button>
          </form>
        </div>
        <img src={grass} className={styles.backImg} />
      </div>
    </>
  );
}

export default SignupTest;
