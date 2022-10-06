import { Divider } from "primereact/divider";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createUser } from "../../../api/api";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";

function AddNewUser() {
  const [formData, setFormData] = useState({});
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success ",
      detail: "User Created Successfully",
      life: 3000,
    });
  };
  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error Message",
      detail: message,
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone_number: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.first_name) {
        errors.first_name = "Name is required.";
      }
      if (!data.last_name) {
        errors.last_name = "Name is required.";
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

      if (!data.phone_number) {
        errors.phone_number = "Phone Number is Required";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      createUser(data)
        .then((res) => {
          showSuccess();
          console.log("success", res);
        })
        .catch((err) => {
          showError(err.response.data.message);
          console.log("Error", err);
        });
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
    <div>
      <Divider className="mt-3" align="center">
        <h2>Add New User</h2>
      </Divider>
      <Toast ref={toast} />
      <div className="flex justify-content-center m-3">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div className="flex">
            <div className="card w-30rem mx-5 ">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="first_name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="first_name">First Name*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="last_name"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="last_name">Last Name*</label>
                </span>
              </div>
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

              <div className="field mb-5">
                <span className="p-float-label">
                  <InputText
                    id="phone_number"
                    name="phone_number"
                    type="number"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="phone_number">Phone Number</label>
                </span>
              </div>
            </div>
          </div>
          <Button type="submit" label="Add New User" className="mt-2 w-30rem" />
        </form>
      </div>
    </div>
  );
}

export default AddNewUser;
