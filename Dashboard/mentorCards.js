import popCat from "../../images/pop-cat.jpg";
import MentorItem from "./mentorCardsitem";
import styles from "./Browse.module.css";
import Fill from "../UI/Fill";
function Mentorcard() {
  const otherCourse = [
    {
      id: "c1",
      name: "Total Number of students enrolled",
      description: "132",
    },
    {
      id: "c2",
      name: "Popularity of the course",
      description: "132/2000",
    },
    
  ];

  return (
    <>
      

      <div className={styles.browseAsd}>
        {otherCourse.map((course) => (
          <MentorItem
            key={course.id}
            name={course.name}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}
export default Mentorcard;
