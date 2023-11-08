import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7194027002142!2d74.28909531448542!3d31.61414764967008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c68eeecd0c9%3A0xa49d14fda0937e9a!2sLahore%20Metro%20Bus%20System%2C%20Shahdara%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676686058698!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-details">
          <h1>Contact Details</h1>
          <p className="c-name">Machine Tek Engineering (Pvt) Ltd.</p>
         
          <p>27n, Sui Gas Road, Mehboob Park, Jia Musa Shahdara Lahore</p>
          <h3>Mobile</h3>
          <p>+92-0300-848 557</p>
          <p>+92-300 840 2095</p>
          <h3>Telephone</h3>
          <p>+92-42-37918132</p>
          <h3>Email</h3>
          <p>info@machinetek.pk</p>
          <h3>website</h3>
          <p>www.machinetek.pk</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
