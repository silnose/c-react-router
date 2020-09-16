import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <h1>Let's get in touch! :) </h1>

      <div className='social-container'>
        <Link to='#' className='twitter color-twitter'>
          <i className='fa fa-twitter'></i>Twitter
        </Link>

        <Link to='#' className='facebook color-facebook'>
          <i className='fa fa-facebook'></i>Facebook
        </Link>

        <Link to='#' className='googleplus color-googleplus'>
          <i className='fa fa-google-plus'></i>Google +
        </Link>

        <Link to='#' className='pinterest color-pinterest'>
          <i className='fa fa-pinterest'></i>Pinterest
        </Link>

        <Link to='#' className='dribbble color-dribbble'>
          <i className='fa fa-dribbble'></i>Dribbble
        </Link>

        <Link to='#' className='instagram color-instagram'>
          <i className='fa fa-instagram'></i>Instagram
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Contact;
