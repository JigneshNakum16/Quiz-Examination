import React, { useState, useEffect } from "react";
import "./Quiz.css";
import axios from "axios";

const Quiz = () => {
  const [question, setQuestion] = useState({
    allQue: [],
    currentQue: {},
    nextQue: {},
    queIndex: 0,
    answer: "",
    queCount: 0,
    trueAns: 0,
    falseAns: 0,
  });
  const [minutes] = useState(0);
  const initialTimer = localStorage.getItem("timer") ?? 15;
  let timeoutId = null;
  const [timer, setTimer] = useState(initialTimer);

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
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (timer <= 0) {
      clearTimeout(timeoutId);
      localStorage.removeItem("timer");
      nextHandler();
    } else {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      localStorage.setItem("timer", timer);
    }
  }, [timer]);

  useEffect(() => {
    nextHandler();
  }, [question.allQue]);

  const nextHandler = () => {
    if (question?.nextQue !== undefined) {
      clearTimeout(timeoutId);
      localStorage.removeItem("timer");

      setQuestion({
        ...question,
        currentQue: question.allQue[question.queIndex],
        nextQue: question.allQue[question.queIndex + 1],
        queIndex: question.queIndex + 1,
        answer: question.allQue[question.queIndex]?.answer,
        queCount: question.queCount + 1,
      });
      setTimer(15);
      localStorage.setItem("timer", timer);
    } else {
      alert("Finish The Quiz");
    }
  };

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
      {/* <div className="TenMins"><Timer time={600000} /></div> */}
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
        <h2>Que. {question.queCount} Out Of 10</h2>
        <h3>{question.currentQue?.Question}</h3>

        <p onClick={optionHandler}>{question.currentQue?.option1}</p>
        <p onClick={optionHandler}>{question.currentQue?.option2}</p>
        <p onClick={optionHandler}>{question.currentQue?.option3}</p>
        <p onClick={optionHandler}>{question.currentQue?.option4}</p>

        <button type="button" className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
