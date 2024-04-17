import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  

  const emailChangeHandler = (e) => {
    console.log(e.target.value);

    setEmail(e.target.value);
  };

  const nameChangeHandler = (e) => {
    console.log(e.target.value);

    setName(e.target.value);
  };

  const formValidationHandler = () => {
    console.log("Validation button clicked!");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      console.log("Error in validating the Email!")
      setShowAlert(true);
    }else{
      setShowAlert(false);
    }





  };


  const buttonResetHandler = () => {
    setEmail("");
    setName("");
  };

  return (
    <div className="container mt-4">
      <h2>Form</h2>

      <div className="row">
        <div className="col">
          <form>

            {showAlert && <div className="alert alert-danger">Email Validation Failed</div>}

          <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                onChange={nameChangeHandler}
                value={name}
              />
            </div>


            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={emailChangeHandler}
                value={email}
              />
            </div>

            <button type="button" className="btn btn-primary" onClick={formValidationHandler}>
              Send
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={buttonResetHandler}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
