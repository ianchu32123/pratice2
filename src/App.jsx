import React, { useState } from "react";
import "./index1.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  let [step, Setstep] = useState(1);
  let [isOpen, SetisOpen] = useState(true);

  function handleprevious() {
    if (step > 1) {
      Setstep((currentstep) => currentstep - 1); //currentstep是隨便設的代號 想設甚麼都行
    }
  }

  function handlenext() {
    if (step < 3) {
      Setstep((currentstep) => currentstep + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => SetisOpen((is) => !is)}>
        &times;
      </button>{" "}
      {/* setopen這邊用true <=> flase來處理 */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step{step}:{messages[step - 1]}
          </p>{" "}
          {/* message是上面字串的訊息[step]要減1是因為數組從0才是第一個 */}
          <div className="buttons">
            <Reusebutton
              textcolor="#fff"
              bgcolor="#7950f2"
              onClick={handleprevious}
              text="上一個"
            />
            <Reusebutton
              textcolor="#fff"
              bgcolor="#7950f2"
              onClick={handlenext}
              text="下一個"
            />
          </div>
        </div>
      )}
    </div>
  );
}
function Reusebutton({ textcolor, bgcolor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
