import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase has been done!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase has been done!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleRemoveClick = () => {
    console.log("remove clcik");
    let newText = text;
    for (let i = 0; newText[i]; i++) {
      newText = newText.replace(" ", "");
    }
    setText(newText);
    props.showAlert("Spaces has been removed from text", "success");
  };
  const handleClearClick = () => {
    let newText = text;
    newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleRemoveClick}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter(() => {
              return text.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter something in box to see here"}</p>
      </div>
    </>
  );
}
