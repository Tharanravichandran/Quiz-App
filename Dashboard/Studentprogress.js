import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./Studentprogress.module.css";
import Navigation from "./Navigation";
import ContinueList from "./ContinueList";
import Card from "../UI/Card";
import Studentprogresslist from "./Studentprogresslist";
import Stoverallprogress from "./studentoverall";
import StCompletedlist from"./studentcompleted";
import StnotCompllist from "./studentnotcomp";
function Studentprogress(props) {
  return (
    <>
      <Navigation></Navigation>
      <div className={styles.container}>
      <h1> Student Progress</h1>
      <h1>Subject - IOT</h1>
      <h3>Mentor name - Ms. Nalina Devi</h3>
      
    <Stoverallprogress></Stoverallprogress>
    <h3>Accuracy of completed quizzes</h3>
      
      
          
        <Card>
      
      <Studentprogresslist></Studentprogresslist>
      <h3>Completed Quizzes</h3>
      <StCompletedlist></StCompletedlist>
      <h3>Not attempted Quizzes</h3>
      <StnotCompllist></StnotCompllist>
    </Card>
      
      {/* <div className={styles.browseBox}> */}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* </div> */}
      <Footer></Footer>
      </div>
    </>
  );
}

export default Studentprogress;
