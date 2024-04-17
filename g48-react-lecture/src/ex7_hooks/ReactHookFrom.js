import React from "react";
import { useForm } from "react-hook-form";

const ReactHookFrom = () => {
  const initialData = { email: "", name: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(initialData);

  const sendData = (data) => {
    console.log(data);
    console.log("Send Data to Api....");
  };

  return (
    <div className="container mt-4">
      <h2>Form</h2>

      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter Name"
                name="name"
                {...register("name", { required: true, maxLength: 40 })}
              />

              {errors.name && errors.name.type === "required" && (
                <div className="invalid-feedback">Name is Required!</div>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <div className="invalid-feedback">Max length Exceeded!</div>
              )}
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <div className="invalid-feedback">Email is Required!</div>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <div className="invalid-feedback">Email Pattern Missmatch!</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => reset()}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReactHookFrom;
