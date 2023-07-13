import BrowseItem from "../Dashboard/BrowseItem";
import styles from "./Courses.module.css";
import popCat from "../../images/pop-cat.jpg";
import SideBar from "../UI/SideBar";
import axios from 'axios';
import React, { useEffect, useState } from "react";

function Course() {
  const [courseDetails, setCourseDetails] = useState([]);
  const attributes = [
    {
      name: "Course",
      link: "/coursePage",
    },
    {
      name: "Cart",
      link: "/",
    },
    {
      name: "Profile",
      link: "/StudentProfile",
    },
    {
      name: "About Us",
      link: "/aboutUs",
    },
    {
      name: "Notification",
      link: "/",
    },
  ];

  useEffect(() => {
    // Function to fetch course details
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getCourses');
        setCourseDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDetails();
  }, []);

  return (
    <>
      <SideBar attributeList={attributes} className={styles.navig} />

      <div className={styles.container}>
        {courseDetails.map((course) => (
          <BrowseItem
            key={course.id}
            courseId={course.courseId}
            name={course.courseName}
            image={popCat}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}

export default Course;