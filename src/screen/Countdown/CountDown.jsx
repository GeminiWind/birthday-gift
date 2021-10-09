import React from "react";
import { FlipClock } from "../../components";
import "./styles.css";

// function component
const CountDown = ({ isVisible, endTime, onCountDownFinished }) => {
  const clockClassName = `clock ${isVisible ? "" : "hidden"}`;

  return (
    <div className="container">
      <div className={clockClassName}>
        <FlipClock
          targetDate={endTime}
          onFinish={onCountDownFinished}
        />
      </div>
    </div>
  );
};

export default CountDown;
