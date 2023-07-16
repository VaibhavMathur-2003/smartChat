import React, { useState } from "react";

export default function Translation({ doStuff, setInput, result }) {
  const [sample, setSample] = useState(true);
  return (
    <>
      <div>
        <h2>Watch The Neural Wonder</h2>
        <textarea
          className="text-area"
          cols={75}
          rows={15}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          className="action-btn"
          onClick={doStuff}
        >
          ➯
        </button>
      </div>
      {true ? (
        <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      ) : (
        <h3 className="result-text">
          ChatGPT, a master of words,<br/> With knowledge that truly astounds,<br/> It
          converses with great ease,<br/> A language model that truly please.
        </h3>
      )}
    </>
  );
}
