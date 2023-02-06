import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../redux/Quiz/action";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [minutes] = useState(0);
  const initialTimer = localStorage.getItem("timer") ?? 15;
  let timeoutId = null;
  const [timer, setTimer] = useState(initialTimer);
  const [required, setRequired] = useState(false);

  const { allQue } = useSelector((state) => state.quiz);

  const updatedData = JSON.parse(localStorage.getItem("CurrentQue"));

  console.log('updatedData', updatedData)

  // console.log("allQue[0].Question", allQue[0].Question);

  const initialState = {
    allQue: allQue,
    currentQue: allQue[0]?.Question,
    nextQue: allQue[1]?.Question,
    queIndex: allQue[0]?.id,
    answer: allQue[0]?.answer,
    queCount: 1,
    trueAns: 0,
    falseAns: 0,
  };

  console.log("initialState", initialState);



  const [quizQuestions, setQuizQuestions] = useState(
    // updatedData === null ? initialState : updatedData
    updatedData || initialState
  );

  console.log("quizQuestions", quizQuestions);

  // useEffect(() => {
  
  //   if(quizQuestions.allQue === null){
  //     setQuizQuestions(initialState)
  //   }
  //   else{
  //     setQuizQuestions( updatedData || initialState)
  //   }
  // }, [])



  const countTimer = () => {
    if (timer <= 0) {
      nextHandler();
      clearTimeout(timeoutId);
      localStorage.removeItem("timer");
    } else {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      localStorage.setItem("timer", timer);
    }
  };

  const nextHandler = () => {
    clearTimeout(timeoutId);
    localStorage.removeItem("timer");
    setRequired(false);

    if (quizQuestions.nextQue !== undefined) {
      setQuizQuestions({
        ...quizQuestions,
        allQue: quizQuestions?.allQue,
        currentQue:
          quizQuestions?.allQue[quizQuestions?.queIndex + 1]?.Question,
        nextQue: quizQuestions?.allQue[quizQuestions?.queCount + 1]?.Question,
        queIndex: quizQuestions?.queIndex + 1,
        answer: quizQuestions?.allQue[quizQuestions?.queIndex + 1]?.answer,
        queCount: quizQuestions?.queCount + 1,
      });
      localStorage.removeItem("timer");
      setTimer(15);
      localStorage.setItem("timer", timer);
    } else {
      setTimer(0);
      clearTimeout(timeoutId);
      localStorage.removeItem("timer");
      // setQuizQuestions(initialState)
      // console.log("Finish The Quiz");
      // navigate('/')
      alert("Finish The Quiz");
    }
  };

  const optionHandler = (e) => {
    setRequired(false);

    if (
      e.target.innerHTML.toLowerCase() ===
      quizQuestions?.allQue[quizQuestions?.queIndex]?.answer.toLowerCase()
    ) {
      // console.log("Answer is right");
      setQuizQuestions({
        ...quizQuestions,
        trueAns: quizQuestions.trueAns + 1,
      });
      setRequired(true);
    } else {
      // console.log("Answer is wrong");
      setQuizQuestions({
        ...quizQuestions,
        falseAns: quizQuestions.falseAns + 1,
      });
      setRequired(true);
    }
  };

  localStorage.setItem("CurrentQue", JSON.stringify(quizQuestions));

  useEffect(() => {
    countTimer();
  }, [timer]);

  useEffect(() => {
    dispatch(quizActions.fetchQuestion());
  }, []);

  return (
    <>
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
          <h2>Que. {quizQuestions?.queCount} Out Of 10</h2>

          <h3>{quizQuestions?.currentQue}</h3>

          <p onClick={optionHandler}>
            {quizQuestions?.allQue[quizQuestions?.queIndex]?.option1}
          </p>
          <p onClick={optionHandler}>
            {quizQuestions?.allQue[quizQuestions?.queIndex]?.option2}
          </p>
          <p onClick={optionHandler}>
            {quizQuestions?.allQue[quizQuestions?.queIndex]?.option3}
          </p>
          <p onClick={optionHandler}>
            {quizQuestions?.allQue[quizQuestions?.queIndex]?.option4}
          </p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={nextHandler}
            disabled={!required}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
