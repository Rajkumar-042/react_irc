import React from "react";
import "./contact.css";
import cont from './images/cont.jpg'

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:kashifkzmi5@gmail.com">
          rajkumar@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/kashiekzmi/">
          User Name: Rajkumar
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/KaShiekzmi">
        Rajkumar
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/kaxhie_x/">
        @Rajkumar
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +91 9989 333 455
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={cont} alt="Pro"/>
      </div>
    </div>
  );
};

export default Contact;
