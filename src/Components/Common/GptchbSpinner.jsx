import React from "react";
import loadingImg from "../../media/loadingGifImg.gif";
import "../../App.css";

// eslint-disable-next-line react/prop-types
const GptchbSpinner = ({ text }) => {
  return (
    <div className="spinnerBox">
      <div style={{ marginTop: "35%", textAlign: "center" }}>
        <img src={loadingImg} alt="loading...." height="80px" width="80px" />
        <p
          style={{
            fontSize: "20px",
            textTransform: "lowercase",
            marginTop: "-3px",
            color: "#403F3F",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default GptchbSpinner;
