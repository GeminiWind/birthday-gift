import React from "react";
import { PlayButton } from "../../components";
import "./styles.css";

const Play = ({ isVisible, onClick }) => {
  const videoClassName = `video ${isVisible ? "" : "hidden"}`;

  return (
    <div className="container">
    {isVisible ? (
      <div className={videoClassName} onClick={onClick}>
        <PlayButton />
      </div>
    ) : null
    }
   </div>
  );
};

export default Play;

