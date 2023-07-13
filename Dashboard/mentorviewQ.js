import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./MentorDash.module.css";
import Navigation from "./mentorNavigation";
import QuizzList from "./Quizzlist";
function MentorviewQ() {
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
      <h3>View Quizzes</h3>
      <QuizzList/>
      
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

export default MentorviewQ;
