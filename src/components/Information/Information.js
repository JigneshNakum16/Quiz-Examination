import React from "react";
import style from "./Information.module.css";
import { useNavigate } from "react-router-dom";
// import { quizActions } from "../../redux/Quiz/action";
// import { useDispatch } from "react-redux";

const Information = () => {
  const Navigation = useNavigate();
  // const dispatch = useDispatch()

  const handleOnClick = () => {
    
    Navigation("/quiz");
    // dispatch(quizActions.fetchQuestion());
  };

  const backOnClick = () => {
    Navigation("/");
  };

  return (
    <>
      <div className={style.info_container}>
        <div className={style.info}>
          <h1>Examination Guidelines</h1>

          <div className={style.guide_info}>
            <p>Hello EveryOne This is Quiz</p>
            <p>10 Questions are given in this quiz</p>
            <p>And Each Questions is given one minute</p>
            <p>All The Best.</p>
          </div>
          <div className={style.btns}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={backOnClick}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOnClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
