import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";

function AddMeasurements() {
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

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
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
      <Divider className="mt-5" align="center">
        <h2>Add Measurements</h2>
      </Divider>
      <div className="flex justify-content-center">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div className="flex">
            <div className="card w-30rem mx-5 ">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <Dropdown
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Select User*</label>
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
                  <Calendar
                    id="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    dateFormat="dd/mm/yy"
                    mask="99/99/9999"
                    showIcon
                  />
                  <label htmlFor="date">Birthday</label>
                </span>
              </div>
              <div className="field mb-5">
                <span className="p-float-label">
                  <Dropdown
                    id="gender"
                    name="gender"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="gender">Gender</label>
                </span>
              </div>
            </div>
            <div className="card w-30rem mx-5">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Profile Name*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Height*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Weight*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Age*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">If Female - then Breast Size*</label>
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

export default AddMeasurements;
