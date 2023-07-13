import Card from "../UI/Card";
import Querylistitem from "./Querylistitem";
import styles from "./quizlistitem.module.css";
function QueryList() {
  const query = [
    {
      StudentID: "1343",
      Query: "Discrepancy in Question 6 of quiz2"
    },
    {
        StudentID: "2645",
      Query: "Discrepancy in Question 2 of quiz3"
     
    },
    {
        StudentID: "3455",
      Query: "Discrepancy in Question 6 of quiz2"},

    {
        StudentID: "4245",
      Query: "Discrepancy in Question 2 of quiz3",
    
    },
  ];
  return (
    <>
      <div classname={styles.continue}>
        {query.map((item) => (
          <Querylistitem
          sid={item.StudentID}
            query={item.Query}
            
          />
        ))}
      </div>
    </>
  );
}

export default QueryList;
