import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Image.css";

function Image() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [sample, setSample] = useState(true);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Beautiful Scenery with snow mountains and crystal clear water.."
  );
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setLoading(false);
    setResult(res.data.data[0].url);
  };
  return (
    <div className="app-main">
      {loading ? (
        <>
          <h2>𝒢𝑒𝓃𝑒𝓇𝒶𝓉𝒾𝓃𝑔..𝒫𝓁𝑒𝒶𝓈𝑒 𝒲𝒶𝒾𝓉..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate Image : 𝒟𝒜𝐿𝐿-𝐸</h2>
          <textarea
            className="app-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="100"
          />
          <button className="generateButton" onClick={generateImage}>
            Watch The Magic
          </button>
          {!(result.length > 0) ? (
            <>
              <img
                className="default"
                src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="result"
              />
            </>
          ) : (
            <>
              <div style={{ display: "flex", margin: "20px" }}>
                <img className="result-image" src={result} alt="result" />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Image;
