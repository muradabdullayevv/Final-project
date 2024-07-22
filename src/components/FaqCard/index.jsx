import React, { useState } from "react";

function FaqCard({ number, question, answer }) {
  const [isFaq, setIsFaq] = useState(false);
  return (
    <div className="faq_item">
      <h4>{number}</h4>
      <div className="faq_text">
        <div className="faq_top_text">
          <h4>{question}</h4>
          {isFaq ? (
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-xmark"
              onClick={() => setIsFaq(false)}
            ></i>
          ) : (
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-plus"
              onClick={() => setIsFaq(true)}
            ></i>
          )}
        </div>
        {isFaq ? <p>{answer}</p> : null}
      </div>
    </div>
  );
}

export default FaqCard;
