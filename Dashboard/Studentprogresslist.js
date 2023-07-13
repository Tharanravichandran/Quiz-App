import Card from "../UI/Card";
import ContinueItem from "./ContinueItem";
import styles from "./ContinueList.module.css";
function Studentprogresslist() {
  const course = [
    {
      id: "sq11",
      courseName: "Data Structure",
      
      Accuracy: 80,
    },
    {
      id: "sq2",
      courseName: "Software Engg",
      
      Accuracy: 80,
    },
    {
      id: "sq3",
      courseName: "Principles of Programming language",
      
      Accuracy: 80,
    },
    {
      id: "sq4",
      courseName: "Neural Networks",
      
      Accuracy: 80,
    },
  ];
  return (
    <>
      <div classname={styles.continue}>
        {course.map((item) => (
          <ContinueItem
            cname={item.courseName}            
            fin={item.Accuracy}
          />
        ))}
      </div>
    </>
  );
}

export default Studentprogresslist;
