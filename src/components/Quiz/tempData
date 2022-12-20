import React, { useState, useEffect } from "react";
import style from "./Quiz.module.css";
// import Question from "./Questions.json";
import axios from "axios";
import Timer from "../Timer/Timer";

const Quiz = () => {
  const [question, setQuestion] = useState(null);

  const fetchQuestion = async () => {
    // console.log("inside fetch question");
    await axios
      .get(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
      )
      .then((response) => {

        // let ran = [];
        // ran.innerHTML =
        //   response.data[Math.floor(Math.random() * response.data.length)];
        // console.log("🚀 ~ file: Quiz.js:29 ~ .then ~ res", ran);
        setQuestion({
          ...question,
          allQue: response?.data,
        // //   // currentQue : response.data[0].Question,
        // //   // nextQue : response.data[1].Question,
        // //   // queCount : response.data[0].id + 1,
        // //   // queIndex : response.data[0].id,
        // //   // answer : response.data[0].answer
        });
        // console.log('response.data', response.data)
        nextHandler();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  
  const nextHandler = () => {
      
    if (question) {
      // const arr = [];
      // arr.push(question)
      // console.log('arr', arr)
      
      // arr.map((que , index) => {
        
        //   console.log('index', index)
        //   console.log('que', que)
        // })
        console.log('question', question)
        setQuestion({
        ...question,
        currentQue: question.currentQue[question.queIndex + 1] ,
        nextQue: question.allQue[question.queIndex + 1],
        queIndex: question.queIndex + 1,
        answer: question.answer,
        queCount: question.queCount + 1,
      });
    }

    // if(question?.nextQue !== undefined){
    //   setQuestion({
    //     ...question,
    //     currentQue: question.allQue[question.queIndex],
    //     nextQue: question.allQue[question.queIndex + 1],
    //     queIndex: question.queIndex + 1,
    //     answer: question.allQue[question.queIndex].answer,
    //     queCount: question.queCount + 1,
    //   });
    // }
    // else {
    //   alert("Finish the Quiz");
    // }

  };

  // console.log("question", question);

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
      <div className={style.TenMins}>
        <Timer time={600000} />
      </div>
      <div className={style.Quiz}>
        <div className={style.Mins}>
          <Timer time={60000} />
        </div>

        {question && (
          
          <>
            <h2>Que. {question?.queCount} Out Of 10</h2>
            <h3>{question?.currentQue}</h3>
            <p onClick={optionHandler}>{question?.allQue[question.queIndex].option1}</p>
            <p onClick={optionHandler}>{question?.allQue[question.queIndex].option2}</p>
            <p onClick={optionHandler}>{question?.allQue[question.queIndex].option3}</p>
            <p onClick={optionHandler}>{question?.allQue[question.queIndex].option4}</p>

          
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextHandler}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
