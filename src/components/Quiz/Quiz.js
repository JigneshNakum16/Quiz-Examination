import React, { useState, useEffect } from "react";
import style from "./Quiz.module.css";
import Question from "./Questions.json";
import Timer from "../Timer/Timer";

const Quiz = () => {
  const [question, setQuestion] = useState({
    allQue: Question,
    currentQue: "",
    nextQue: "",
    queIndex: 0,
    ans: "",
    queCount : 0,
    givenAns : false
  });



  const nextHandler = () => {
    if (question.nextQue !== undefined) {
      setQuestion({
        ...question,
        currentQue: question.allQue[question.queIndex],
        nextQue: question.allQue[question.queIndex + 1],
        queIndex: question.queIndex + 1,
        ans: question.allQue[question.queIndex].ans,
        queCount : question.queCount + 1,
        // givenAns : 
      });
    }
    else{
      alert("Finish the Questions")
    }
  };

  // console.log('question.ans', question)

  const optionHandler = () => {
    debugger
    // const answers = Question.map((ans ) => {
    //   return ans
    // })

    console.log('CurrentQue', question.currentQue.ans)

    console.log('Answers', question.ans)

    if(question.currentQue.ans !== question.ans){
      console.log("Answer is wrong")
      // setQuestion({
      //   ...question,
      //   givenAns : true
      // })
    }
    else{
      console.log("Answer is right")

      // setQuestion({
      //   ...question,
      //   givenAns : false
      // })
    }
  };

  console.log('Given Answers', question.givenAns)


  useEffect(() => {
    nextHandler();
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
        <h2>Que. {question.queCount} Out Of 10</h2>
        <h3>{question.currentQue.question}</h3>

        <p onClick={optionHandler}>{question.currentQue.opt1}</p>
        <p onClick={optionHandler}>{question.currentQue.opt2}</p>
        <p onClick={optionHandler}>{question.currentQue.opt3}</p>
        <p onClick={optionHandler}>{question.currentQue.opt4}</p>

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
