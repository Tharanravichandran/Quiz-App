import Card from "../UI/Card";
import ContinueItem from "./ContinueItem";
import styles from "./ContinueList.module.css";
function ContinueList() {
  const course = [
    {
      id: "c1",
      courseName: "Data Structure",
      remaining: 3,
      finished: 80,
    },
    {
      id: "c2",
      courseName: "Software Engg",
      remaining: 3,
      finished: 80,
    },
    {
      id: "c3",
      courseName: "Principles of Programming language",
      remaining: 3,
      finished: 80,
    },
    {
      id: "c4",
      courseName: "Neural Networks",
      remaining: 3,
      finished: 80,
    },
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

export default ContinueList;
