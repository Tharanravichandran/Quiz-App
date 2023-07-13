import styles from "./CourseContent.module.css";
import { useParams } from "react-router-dom";
import popCat from "../../images/pop-cat.jpg";
import SideBar from "../UI/SideBar";
import axios from 'axios';
import React, { useEffect, useState } from "react";

function CourseContent() {
  const params = useParams();
  const attributes = [
    {
      name: "Quizzes",
      link: `/coursePage/${params.cId}/Quiz`,
    },
    {
      name: "Mentors",
      link: "/MentorDash",
    },
    {
      name: "Profile",
      link: "/StudentProfile",
    },
    {
      name: "Cart",
      link: "/",
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

  const [courseDescription, setCourseDescription] = useState(null);

  useEffect(() => {
    const fetchCourseDescription = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getCoursedesc', {
          params: {
            courseid: params.cId,
          },
        });

        setCourseDescription(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDescription();
  }, [params.cId]);

  return (
    <>
      <SideBar attributeList={attributes} />
      <div className={styles.banner2}></div>
      <div className={styles.content}>
        {courseDescription ? (
          <>
            <img src={popCat} alt="Course" />
            <h1>{courseDescription.coursNname}</h1>
            <p>{courseDescription.courseDescription}</p>
          </>
        ) : (
          <p>Loading course description...</p>
        )}
      </div>
    </>
  );
}

export default CourseContent;
