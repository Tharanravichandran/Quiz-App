import popCat from "../../images/pop-cat.jpg";
import BrowseItem from "./BrowseItem";
import styles from "./Browse.module.css";
import Fill from "../UI/Fill";
import { useNavigate } from "react-router-dom";
function Browse() {
  let navigate = useNavigate();
  const otherCourse = [
    {
      id: "c1",
      name: "Physics",
      description: "Pain",
    },
    {
      id: "c2",
      name: "Chemistry",
      description: "More pain",
    },
    {
      id: "c3",
      name: "Math",
      description: "sdhfsdjkfhaifyeh jhk",
    },
  ];

  return (
    <>
      <h1 className={styles.browseHeader}>Browse</h1>
      <Fill onClick={() => navigate("/coursePage")}>More</Fill>

      <div className={styles.browseAsd}>
        {otherCourse.map((course) => (
          <BrowseItem
            courseId={course.id}
            name={course.name}
            image={popCat}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}
export default Browse;
