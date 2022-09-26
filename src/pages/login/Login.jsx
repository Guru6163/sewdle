import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
import { login } from "../../api/api";

function Login() {
  const navigate = useNavigate();
  const roleIds = [
    {
      id: "ff000000-0000-0000-0000-000000000000",
      role: "Super Admin",
    },
    {
      id: "ff000000-0000-0000-0000-000000000001",
      role: "Customer",
    },
  ];
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
      return errors;
    },
    onSubmit: (data) => {
      login(data.email, data.password).then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem("user", JSON.stringify(res.data.user));
          window.localStorage.setItem("token", res.data.token);
        }
      });
      navigate("/dashboard");
      formik.resetForm();
    },
  });

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
                  />
                  <label htmlFor="password">Password*</label>
                </span>
              </div>
            </div>
          </div>
          <Button type="submit" label="Submit" className="mt-2 w-30rem" />
        </form>
      </div>
    </div>
  );
}

export default Login;
