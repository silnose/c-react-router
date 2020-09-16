import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

function Modal(props) {
  return (
    <div className='Modal'>
      {props.children}
      <Link
        to={{
          pathname: "/videos",
          state: {
            modal: false,
          },
        }}>
        <button onClick={props.handleClick} className='Modal-close' />
      </Link>
    </div>
  );
}

export default Modal;
