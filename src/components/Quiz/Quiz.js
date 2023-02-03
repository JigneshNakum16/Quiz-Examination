import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../redux/Quiz/action";
// import Timer from "../Timer/Timer";

const Quiz = () => {
  const [minutes] = useState(0);
  const initialTimer = localStorage.getItem("timer") ?? 15;
  // let timeoutId = null;
  const [timer, setTimer] = useState(initialTimer);

  // const { allQue, currentQue, nextQue, queCount, queIndex, answer } =
  //   useSelector((state) => state.quiz);

  const quiz = useSelector((state) => state.quiz);
  console.log("quiz", quiz.allQue);

  // quiz.map((data,index) => {
  //   return (

  //   )
  // })

  const [quizQuestions, setQuizQuestions] = useState({
    allQue: quiz,
    currentQue: null,
    nextQue: null,
    queIndex: 0,
    answer: "",
    queCount: 1,
  });


  console.log('quizQuestions', quizQuestions)

  const dispatch = useDispatch();

  // const countTimer = () => {
  //   if (timer <= 0) {
  //     clearTimeout(timeoutId);
  //     localStorage.removeItem("timer");
  //     nextHandler();
  //   } else {
  //     timeoutId = setTimeout(() => {
  //       setTimer(timer - 1);
  //     }, 1000);
  //     localStorage.setItem("timer", timer);
  //   }
  // };

  const nextHandler = () => {
    // if (nextQue !== undefined) {
    // clearTimeout(timeoutId);
    // localStorage.removeItem("timer");
    // const que = {
    //   currentQue: action.fetchQue[state.queIndex],
    //   nextQue: action.fetchQue[state.queIndex + 1],
    //   queIndex: state.queIndex,
    //   answer: action.fetchQue[state.queIndex]?.answer,
    //   queCount: state.queIndex + 1,
    // }
    // dispatch(fetchQuestion(nextQue))
    // setTimer(15);
    // localStorage.setItem("timer", timer);
    // }
    // else {
    //   // clearTimeout(timeoutId);
    //   // localStorage.removeItem("timer");
    //   // alert("Finish The Quiz");
    //   console.log("Finish The Quiz");
    // }
  };

  // const optionHandler = (e) => {
  //   if (e.target.innerHTML.toLowerCase() === question.answer.toLowerCase()) {
  //     console.log("Answer is right");
  //     setQuestion({
  //       ...question,
  //       trueAns: question.trueAns + 1,
  //     });
  //   } else {
  //     console.log("Answer is wrong");
  //     setQuestion({
  //       ...question,
  //       falseAns: question.falseAns + 1,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   countTimer();
  // }, [timer]);

  useEffect(() => {
    dispatch(quizActions.fetchQuestion());
  }, []);
  return (
    <>
      {/* <div className="TenMins"><Timer time={600000} /></div>   */}
      <div className="Quiz">
        <div className="Mins">
          <div className="container">
            <div className="Timer">
              <div className="col-4">
                <div className="box">
                  <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                  <span className="text">Minutes</span>
                </div>
              </div>
              <div className="col-4">
                <div className="second">
                  <p id="second">{timer < 10 ? "0" + timer : timer}</p>
                  <span className="text">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

        <h2>Que. {quizQuestions.queCount} Out Of 10</h2>
          {/* <h3>{currentQue?.Question}</h3> */}

          {/* <p onClick={optionHandler}>{currentQue?.option1}</p>
          <p onClick={optionHandler}>{currentQue?.option2}</p>
          <p onClick={optionHandler}>{currentQue?.option3}</p>
        <p onClick={optionHandler}>{currentQue?.option4}</p> */}

        <button type="button" className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </div>
      </div>
    </>
  );
};

export default Quiz;
