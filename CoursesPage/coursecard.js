import popCat from "../../images/pop-cat.jpg";
import CourseItem from "./CourseItem";
import styles from "./MentorBrowse.module.css";

function Coursecard() {
  const otherCourse = [
    {
      id: "c1",
      name: "Mentor Description",
      description: "Mr. Gopal is an exceptional mentor and esteemed member of the Amrita Value Program faculty. With his extensive knowledge and experience, he brings a wealth of expertise to the role of a quiz app mentor. Through his guidance and encouragement, students are not only able to enhance their academic performance but also develop a strong sense of integrity and responsibility. Mr. Gopal's unwavering commitment to shaping the next generation of leaders makes him an outstanding choice as a mentor for the quiz app",
    },
    {
      id: "c2",
      name: "Course Description",
      description: "The Amrita Value Program for the Quiz App is a comprehensive course designed to instill a deep understanding and practice of ethical values among participants. This program aims to cultivate a sense of integrity, compassion, and social responsibility through interactive quizzes and engaging activities. Participants will explore various ethical dilemmas and learn how to make informed decisions guided by moral principles. The course also emphasizes the development of critical thinking skills, as participants analyze real-life scenarios and apply ethical reasoning to arrive at ethical solutions.",
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
export default Coursecard;
