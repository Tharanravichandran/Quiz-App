import Card from "../UI/Card";
import ContinueItem from "./ContinueItem";
import styles from "./ContinueList.module.css";
function Stoverallprogress() {
  const course = [
    {
      id: "overall",
      courseName: "Overall Progress",
      
      finished: 80,
    }
   
  ];
  return (
    <>
      <div classname={styles.continue}>
        {course.map((item) => (
          <ContinueItem
            cname={item.courseName}
            remain={item.remaining}
            fin={item.finished}
          />
        ))}
      </div>
    </>
  );
}

export default Stoverallprogress;
