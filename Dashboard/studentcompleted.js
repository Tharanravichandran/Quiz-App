import Card from "../UI/Card";
import ContinueItem from "./stcomplistitem";
import styles from "./stcomplistitem.module.css";
function StCompletedlist() {
  const course = [
    {
      id: "sq11",
      courseName: "Data Structure"
    },
    {
      id: "sq2",
      courseName: "Software Engg"
    },
    {
      id: "sq3",
      courseName: "Principles of Programming language"
    },
    {
      id: "sq4",
      courseName: "Neural Networks"
    },
  ];
  return (
    <>
      <div classname={styles.continue}>
        {course.map((item) => (
          <ContinueItem
            cname={item.courseName}
          />
        ))}
      </div>
    </>
  );
}

export default StCompletedlist;
