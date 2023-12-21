import React, { useState, useRef } from "react";
import arrow from "../../assets/arrow.svg";

function Collapse(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  // useRef pour aller chercher l'exacte hauteur nécessaire pour le collapse
  const myRef = useRef();
  const myRefValue = myRef.current;

  return (
    <div className="collapse">
      <button className="collapse__label" onClick={toggle}>
        {props.label}
        <img className={open ? "rotated" : ""} src={arrow} alt="arrow" />
      </button>
      <div className={open ? "collapse__joiner" : ""}></div>
      <div
        className="collapse__content"
        ref={myRef}
        style={
          open ? { height: myRefValue.scrollHeight + "px" } : { height: "0px" }
        }
      >
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;
