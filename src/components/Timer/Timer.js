import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({time}) => {

  const [minutes] = useState(0);
  const initialTimer = localStorage.getItem("timer") ?? time;
  let timeoutId = null;
  const [timer, setTimer] = useState(initialTimer);



  const countTimer = () => {
    if (timer <= 0) {
      clearTimeout(timeoutId);
      localStorage.removeItem("timer");
    } else {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      localStorage.setItem("timer", timer);
    }
  };

  useEffect(() => {
    countTimer();
  }, [timer]);

  return (
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
  );
};

export default Timer;
