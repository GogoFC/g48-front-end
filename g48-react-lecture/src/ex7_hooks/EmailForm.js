import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (e) => {
    console.log(e.target.value);

    setEmail(e.target.value);
  };

  const buttonResetHandler = () => {
    setEmail("");
  };

  return (
    <div className="container mt-4">
      <h2>Form</h2>

      <div className="row">
        <div className="col">
          <form>
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

            <button type="button" className="btn btn-primary">
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
