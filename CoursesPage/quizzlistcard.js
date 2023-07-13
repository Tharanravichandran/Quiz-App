import popCat from "../../images/pop-cat.jpg";
import CourseItem from "./CourseItem";
import styles from "./MentorBrowse.module.css";

function Quizcard() {
  const otherCourse = [
    {
      id: "c1",
      name: "Arithmetic",
    },
    
    
  ];

  return (
    <>
      

      <div className={styles.browseAsd}>
        {otherCourse.map((course) => (
          <CourseItem
            key={course.id}
            name={course.name}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}
export default Quizcard;
