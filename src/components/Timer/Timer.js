import React, { useState, useEffect } from "react";
import "./Timer.css";
const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const date = Date.now() + props.time;

  //   const getTime = (date) => {
  //     const time = date - Date.now();
  //     setMinutes(Math.floor((time / 1000 / 60) % 60));
  //     setSeconds(Math.floor((time / 1000) % 60));
  //   };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = date - Date.now();
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
          <div className="boxsecond">
            <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
            <span className="text">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
