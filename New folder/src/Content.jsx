import React from "react";

const h1 = {
  color: "dodgerblue",
  textTransform: "capitlize",
  borderRadius: "30px",
  backgroundColor: "white",
  fontSize: "60px",
  height: "80px",
  width: "100%"
};

function Content() {
  // const rootElement = document.getElementById("root");
  let time = new Date();
  time = time.getHours();
  let greetings = "";
  const cssStyle = {};

  if (time >= 1 && time < 12) {
    greetings = "Good morning";
    cssStyle.color = "orange";
  } else if (time >= 12 && time < 19) {
    greetings = "Good afternoon";
    cssStyle.color = "red";
  } else {
    greetings = "Good night";
    cssStyle.color = "grey";
  }
  return (
    <>
      <div>
        <h1 style={h1}>
          Hello, <span style={cssStyle}>{greetings}</span>
        </h1>
      </div>
    </>
  );
}
export default Content;
