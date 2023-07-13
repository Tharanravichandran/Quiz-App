import { Fragment } from "react";
import Footer from "../Dashboard/Footer";
import Coursecard from "./coursecard";
import Navigation from "../Dashboard/Navigation";
import Quizcard from "./quizzlistcard";
import styles1 from "../Dashboard/MentorQ.module.css";
import { useNavigate } from "react-router-dom";
function Coursedesc() {
    let navigate=useNavigate();
  return (
    <>
      <Navigation></Navigation>
     <h2>Course: Amrita Value Program     </h2>
     <h2>Mentor Name: Mr. Gopal</h2>
     <Coursecard/>
     <h2>Available Quizzes</h2>
     <Quizcard/>
     <Quizcard/>
     <Quizcard/>
     <center>
     <button className={styles1.btn} onClick={() => navigate("")}>
      Add to Cart
    </button></center>
      <Footer></Footer>
    </>
  );
}

export default Coursedesc;
