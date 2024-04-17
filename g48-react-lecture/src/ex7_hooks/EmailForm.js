import React, { useState } from "react";

const EmailForm = () => {
  const [person, setPerson] = useState({email: "", name: ""});
  const [errorMessage, setErrorMessage] = useState({email: "", name: ""});
  

  const emailChangeHandler = (e) => {
    //console.log(e.target.value);
    const _person = {...person}; 
    _person.email = e.target.value;
  
    setPerson(_person);
  };

  const nameChangeHandler = (e) => {
    console.log(e.target.value);
    const _person = {...person}; 
    _person.name = e.target.value;

    setPerson(_person);
  };

  const formValidationHandler = () => {
    console.log("Validation button clicked!");

    let isValid = true;
    let error = {email: "", name: ""};
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(person.email)){
      //console.log("Error in validating the Email!");
      isValid = false;
      error.email = "Email is not valid";
    }

    if(person.name === ''){
      isValid = false;
      error.name = "Name is not valid";
    }

    setErrorMessage(error);


    if(isValid){
      //const person = {email: email, name: name};

      console.log(person);

      console.log("Send Data to Backend....");


    }

  };


  const buttonResetHandler = () => {
    setPerson({email: "", name: ""});
    setErrorMessage({email: "", name: ""});

  };

  return (
    <div className="container mt-4">
      <h2>Form</h2>

      <div className="row">
        <div className="col">
          <form>

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
                value={person.name}
              />

              {errorMessage && errorMessage.name && <p className="text-danger">{errorMessage.name}</p>}

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
                value={person.email}
              />

            {errorMessage && errorMessage.email && <p className="text-danger">{errorMessage.email}</p>}
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
