import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/// ...

function Faq(props) {
  return (
    <div className="box">
      <div className="question">
        <p>{props.ques}sdfsdfsdfsdfsdfsdfsfsfsfsfsf</p>
        {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
      </div>
      <div className="answer">
        <p>{props.ans}</p>
      </div>
    </div>
  );
}

export default Faq;
