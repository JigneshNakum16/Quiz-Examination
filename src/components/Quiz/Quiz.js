import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../Actions/index";
// import axios from "axios";

const Quiz = () => {
  // const [question, setQuestion] = useState({
  //   allQue: [],
  //   currentQue: {},
  //   nextQue: {},
  //   queIndex: 0,
  //   answer: "",
  //   queCount: 0,
  //   trueAns: 0,
  //   falseAns: 0,
  // });
  // const [minutes] = useState(0);
  // const initialTimer = localStorage.getItem("timer") ?? 15;
  let timeoutId = null;
  // const [timer, setTimer] = useState(initialTimer);
const {allQue,currentQue,nextQue,queCount,queIndex}=useSelector(state=>state.quiz);
  const dispatch = useDispatch();
  // console.log('allQue', allQue)

  // const fetchQuestion = async () => {
  //   await axios
  //     .get(
  //       `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
  //     )
  //     .then((response) => {
  //       setQuestion({
  //         ...question,
  //         allQue: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  

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

  // useEffect(() => {
  //   countTimer();
  // }, [timer]);

  useEffect(() => {
    nextHandler();
  }, [allQue]);

  const nextHandler = () => {
    if (nextQue !== undefined) {
      // clearTimeout(timeoutId);
      // localStorage.removeItem("timer");

      // setQuestion({
      //   ...question,
      //   currentQue: question.allQue[question.queIndex],
      //   nextQue: question.allQue[question.queIndex + 1],
      //   queIndex: question.queIndex + 1,
      //   answer: question.allQue[question.queIndex]?.answer,
      //   queCount: question.queCount + 1,
      // });

      dispatch(fetchQuestion(allQue));

      // setTimer(15);
      // localStorage.setItem("timer", timer);
    } else {
      // clearTimeout(timeoutId);
      // localStorage.removeItem("timer");
      // alert("Finish The Quiz");
      // console.log("Finish The Quiz");

    }
  };

  const optionHandler = (e) => {
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
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <>
      {/* <div className="TenMins"><Timer time={600000} /></div> */}
      <div className="Quiz">
        {/* <div className="Mins">
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
        </div> */}
        <h2>Que. {queCount} Out Of 10</h2>
        <h3>{currentQue?.Question}</h3>

        <p onClick={optionHandler}>{currentQue?.option1}</p>
        <p onClick={optionHandler}>{currentQue?.option2}</p>
        <p onClick={optionHandler}>{currentQue?.option3}</p>
        <p onClick={optionHandler}>{currentQue?.option4}</p>

        <button type="button" className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
