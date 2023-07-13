import { Fragment } from "react";
import Footer from "../Dashboard/Footer";
import Coursecard from "./coursecard";
import Navigation from "../Dashboard/Navigation";
import Quizcard from "./quizzlistcard";
import styles1 from "../Dashboard/MentorQ.module.css";
import { useNavigate } from "react-router-dom";
import QuizzList from "../Dashboard/Quizzlist";
import styles from "./coursedesc.module.css";
function Coursedesc() {
    let navigate=useNavigate();
  return (
    <>
      <Navigation></Navigation>
      <div className={styles.container}>
     <h2>Course: Amrita Value Program     </h2>
     <h2>Mentor Name: Mr. Gopal</h2>
     <Coursecard/>
     <h2>Available Quizzes</h2>
     <QuizzList/>
     <center>
     <button className={styles1.btn} onClick={() => navigate("")}>
      Add to Cart
    </button></center>
      <Footer></Footer>
      </div>
    </>
  );
}

export default Coursedesc;
