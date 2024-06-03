import React from "react";
import "../App.css";

export default function SubTitleText({ subtitle }) {
  return (
    <div className="container-fluid" style={{margin: "70px"}}>
      <span>
        <p className="text-center text-capitalize fs-1" id="subtitle-text">
          {" "}
          {subtitle}
        </p>
        <hr style={{ width: "50%", margin: "0 auto" }} />
      </span>
    </div>
  );
}
