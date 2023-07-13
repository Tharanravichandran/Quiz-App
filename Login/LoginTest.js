import styles from "./LoginTest.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import popCat from "../../images/pop-cat.jpg";
import { MongoClient } from "mongodb";
function Login() {
  const mongoClient = new MongoClient(
    "mongodb+srv://admin:6zswGIPvWi2PuW8G@quizapp.tdjxzlz.mongodb.net/quiz?retryWrites=true&w=majority"
  );
  const data = await mongoClient.db().collection("student").find().toArray();
  console.log("!!!", data);

  let navigate = useNavigate();
  const enteredUsername = useRef();
  const enteredPass = useRef();
  const enteredRole = useRef();
  function loginHandler(event) {
    event.preventDefault();
    const uname = enteredUsername.current.value;
    const pass = enteredPass.current.value;
    const role = enteredRole.current.value;
    if (role === "Student") {
      navigate("/StudentDashboard");
    }
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <form>
          <div className={styles.header}>
            <h2>Welcome Back!</h2>
            <p>quiz app</p>
          </div>
          <div className={styles.userInfo}>
            <input
              type="text"
              placeholder="Username"
              ref={enteredUsername}
            ></input>
            <input type="text" placeholder="Password" ref={enteredPass}></input>
            <label for="Role">Role:</label>
            <select name="Role" ref={enteredRole}>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <p>Forgot password?</p>
          <button onClick={loginHandler}>Login</button>
          <button>Sign up</button>
        </form>
        <div className={styles.picture}>
          <img src={popCat} alt="pop cat"></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
