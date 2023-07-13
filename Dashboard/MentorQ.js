import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./MentorDash.module.css";
import styles1 from "./MentorQ.module.css";
import Navigation from "./mentorNavigation";
import { useNavigate } from "react-router-dom";

function MentorDash() {
    let navigate=useNavigate();
  return (
    <>
      
      <Navigation></Navigation>
      <div className={styles.container}>
      <br></br>
      <div style={{ border: '5px solid black', borderRadius: '20px' }}>
      
  <h2 style={{ color: 'black' }}>Course Name: Internet Of Things</h2>
  <h2 style={{ color: 'black' }}>Mentor Name: Ms Nalina Devi</h2>
</div>

      
      {/* <div className={styles.browseBox}> */}
      <h1>Manage Quizzes</h1>
      <br></br>
      <center>
      <button className={styles1.btn} onClick={() => navigate("/MentorviewQ")}>
      View Quizzes
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className={styles1.btn} onClick={() => navigate("/MentoreditQ")}>
      Edit Quizzes
    </button>
    </center>
      
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
     <br></br>
      {/* </div> */}
      <Footer></Footer>
      </div>
    </>
    
  );
}

export default MentorDash;
