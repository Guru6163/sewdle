import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";

function Login() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div style={{ height: "100vh" }} className="">
      <div
        style={{ height: "100%" }}
        className="  flex flex-column align-items-center justify-content-center"
      >
        <form onSubmit={formik.handleSubmit} className="p-fluid ">
          <div
            className="text-6xl font-bold m-5"
            style={{
              letterSpacing: "18px",
            }}
          >
            SEWDLE
          </div>
          <div className="flex">
            <div className="card w-30rem mx-5 ">
              <div className="field mb-5">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="email">Email*</label>
                </span>
              </div>
              <div className="field mb-5">
                <span className="p-float-label">
                  <Password
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                    header={passwordHeader}
                    footer={passwordFooter}
                  />
                  <label htmlFor="password">Password*</label>
                </span>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            label="Submit"
            className="mt-2 w-30rem"
            onClick={() => navigate("/allUsers")}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
