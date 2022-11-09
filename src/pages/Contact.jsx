import React from "react";

const Contact = () => {
  return (
    <div className="container contact-container">
      <form className="contact-form">
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="fname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              id="fname"
            />
          </div>
          <div className="col-6">
            <label htmlFor="lname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              id="lname"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile No.:
          </label>
          <input
            type="text"
            id="mobile"
            className="form-input"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea id="message" cols="30" className="form-input"></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Send <i className="fa-solid fa-paper-plane fa-sm"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
