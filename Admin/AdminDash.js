import styles from "./AdminDash.module.css";
/*import Graph from "../Dashboard/Graph";*/
import Card from "../UI/Card";
import SideBar from "../UI/SideBar";
import Card2 from "../UI/Card2";
import AdmGraph from "./admin_bargraph";


function AdminDash() {
  const attributes = [
    {
      name: "Analytics and Reports",
      link: "/Aanalytics",
    },
    {
      name: "Mentor Management",
      link: "/Coursedesc",
    },
    {
      name: "Quiz Management",
      link: "/Coursedesc",
    },
    {
      name: "User Management",
      link: "/Mnotitifications",
    },
    {
      name: "Notifications",
      link: "/Mnotitifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];

  return (
    <>
      <div className={styles.body}>
        <SideBar attributeList={attributes} />
        <div className="name"><h2><br></br>
        

        welcome back naina!</h2></div>
        

        <div className={styles.cardWrapper}>
          <br></br>
          <br></br>
        <br></br>
        <br></br>

          <Card2 heading="Number of Students" count={500} />
          <Card2 heading="Number of Mentors" count={50} />
          <Card2 heading="Number of Courses" count={10} />
          
<br></br>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <AdmGraph/>
        

        <div className={styles.cardWrapper}>
          <Card className={styles.add}>
            <p>Add Course</p>
          </Card>
          <Card className={styles.add}>
            <p>Add Mentor</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AdminDash;