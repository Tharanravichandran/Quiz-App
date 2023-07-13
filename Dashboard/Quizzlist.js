import Card from "../UI/Card";
import Quizlistitem from "./quizlistitem";
import styles from "./quizlistitem.module.css";
function QuizzList() {
  const quiz = [
    {
      id: "1",
      QuizName: "IOT Introduction"
    },
    {
      id: "2",
      QuizName: "M2M vs CPM vs IoT vs WoT"
     
    },
    {
      id: "3",
      QuizName: "Data Protocols"},

    {
      id: "4",
      QuizName: "COAP",
    
    },
  ];
  return (
    <>
      <div classname={styles.continue}>
        {quiz.map((item) => (
          <Quizlistitem
            qid={item.id}
            qname={item.QuizName}
            
          />
        ))}
      </div>
    </>
  );
}

export default QuizzList;
