import React, { useState, useEffect } from "react";
import style from "./Quiz.module.css";
// import Question from "./Questions.json";
import axios from "axios";
// import Timer from "../Timer/Timer";

const Quiz = () => {
  const [question, setQuestion] = useState({
    allQue: "",
    currentQue: "",
    nextQue: "",
    queIndex: 0,
    answer: "",
    queCount: 0,
    trueAns: 0,
    falseAns: 0,
  });

  const fetchQuestion = async () => {
    await axios
      .get(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
      )
      .then((response) => {
        setQuestion({ 
           ...question,
           allQue: response.data,

          });
          // setTimeout(() => {
            nextHandler()
          // }, 1000);
      
      })
      .catch((error) => {
        console.log("error", error);
      });
  };



  
  const nextHandler = () => {
    if (question?.nextQue !== undefined) {
      setQuestion({
        ...question,
        currentQue: question.allQue[question.queIndex],
        nextQue: question.allQue[question.queIndex + 1],
        queIndex: question.queIndex + 1,
        answer: question.allQue[question.queIndex].answer,
        queCount: question.queCount + 1,
      });

    } else {
      alert("Finish the Quiz");
    }
  };
  
  console.log('question', question)


  // setInterval(nextHandler, 60000);

  const optionHandler = (e) => {
    if (e.target.innerHTML.toLowerCase() === question.answer.toLowerCase()) {
      console.log("Answer is right");
      setQuestion({
        ...question,
        trueAns: question.trueAns + 1,
      });
    } else {
      console.log("Answer is wrong");

      setQuestion({
        ...question,
        falseAns: question.falseAns + 1,
      });
    }
  };

  useEffect(() => {
    fetchQuestion();

  }, []);

  return (
    <>
      <div className={style.TenMins}>{/* <Timer time={600000} /> */}</div>
      <div className={style.Quiz}>
        <div className={style.Mins}>{/* <Timer time={60000} /> */}</div>
        <h2>Que. {question.queCount} Out Of 10</h2>
        <h3>{question.currentQue.Question}</h3>

        <p onClick={optionHandler}>{question.currentQue.option1}</p>
        <p onClick={optionHandler}>{question.currentQue.option2}</p>
        <p onClick={optionHandler}>{question.currentQue.option3}</p>
        <p onClick={optionHandler}>{question.currentQue.option4}</p>

        {/* <input type="radio" name="opt1" id="opt1" value={que.opt1}/>
      <label htmlFor="opt1">{que.opt1}</label>

      <input type="radio" name="opt2" id="opt2" value={que.opt2}/>
      <label htmlFor="opt2">{que.opt2}</label>

      <input type="radio" name="opt3" id="opt3" value={que.opt3}/>
      <label htmlFor="opt3">{que.opt3}</label>

      <input type="radio" name="opt4" id="opt4" value={que.opt4}/>
      <label htmlFor="opt4">{que.opt4}</label> */}

        <button type="button" className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
