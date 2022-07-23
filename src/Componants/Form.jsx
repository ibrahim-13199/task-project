import React, { useState, useRef, useEffect } from "react";
import FormValidation from "./FormValidation";
import "./Form.css";

export function Form() {
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(FormValidation(values));
    if (
      refinput.current.value &&
      refinputemail.current.value &&
      refinputpass.current.value
    ) {
      setValues({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const refinput = useRef();
  const refinputemail = useRef();
  const refinputpass = useRef();
  useEffect(() => {
    refinput.current.focus();
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
    });
  };
  const handleChangeemail = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };
  const handleChangeepassword = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  return (
    <>
      <div style={{ color: "maroon" }}>
        You Can Login to see more and more to see our products
      </div>
      <br></br>
      <div className="parent d-flex">
        <form className=" imag">
          <div className="text-danger" />
          <div className="container d-flex justify-content-center">
            <div className="card px-1 py-4">
              <div className="card-body">
                <h6
                  style={{
                    color: "#0d85fe",
                    fontSize: "large",
                    fontWeight: "bolder",
                  }}
                  className="card-title mb-3"
                >
                  Login
                </h6>
                <br></br>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        ref={refinput}
                      />
                    </div>
                    {errors.name && (
                      <p className="d-block text-danger"> {errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group mb-5">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          value={values.email}
                          placeholder="Email"
                          onChange={handleChangeemail}
                          ref={refinputemail}
                        />
                      </div>
                      {errors.email && (
                        <p className="d-block text-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          value={values.password}
                          placeholder="Password"
                          onChange={handleChangeepassword}
                          ref={refinputpass}
                        />
                      </div>
                      {errors.password && (
                        <p className="d-block text-danger">{errors.password}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5"></div>
                </div>
                <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                  {" "}
                  <small className="agree-text">
                    By Booking this appointment you agree to the
                  </small>{" "}
                  <a href="#" className="terms">
                    Terms & Conditions
                  </a>{" "}
                </div>{" "}
                <button
                  onClick={handleFormSubmit}
                  className="btn btn-primary btn-block confirm-button"
                >
                  Confirm
                </button>
                {errors.confirm && (
                  <p className="mt-1 d-block text-success"> {errors.confirm}</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
