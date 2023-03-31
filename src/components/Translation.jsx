import React, { useState } from "react";

export default function Translation({ doStuff, setInput, result }) {
  const [sample, setSample] = useState(true);
  return (
    <>
      <div>
        <h2>𝒲𝒶𝓉𝒸𝒽 𝒯𝒽𝑒 𝒩𝑒𝓊𝓇𝒶𝓁 𝒲𝑜𝓃𝒹𝑒𝓇</h2>
        <textarea
          className="text-area"
          cols={75}
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          className="action-btn"
          onClick={() => {
            doStuff();
            setSample(false);
          }}
        >
          Que Miras Bobo ?
        </button>
      </div>
      {!sample ? (
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
