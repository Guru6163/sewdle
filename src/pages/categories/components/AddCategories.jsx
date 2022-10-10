import { Divider } from "primereact/divider";
import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { createCategory } from "../../../api/api";

function AddCategories() {
  const [image, setImage] = useState([]);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Category Added Successfully",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Creating category",
      life: 3000,
    });
  };
  const formik = useFormik({
    initialValues: {
      type: "",
      sub_catagory: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.type) {
        errors.type = "Name is required.";
      }

      if (!data.sub_catagory) {
        errors.sub_catagory = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      var formdata = new FormData();
      formdata.append("type", data.type);
      formdata.append("sub_category", data.sub_catagory);
      formdata.append("image", image);
      createCategory(formdata)
        .then((res) => showSuccess())
        .catch((err) => showError());
    },
  });
  console.log(formik.values);
  return (
    <div>
      <div>
        <Toast ref={toast} />
        <Divider className="mt-5" align="center">
          <h2>Add Category</h2>
        </Divider>
        <div className="flex justify-content-center">
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="flex">
              <div className="card w-30rem mx-5 ">
                <div className="field mb-5 ">
                  <span className="p-float-label">
                    <Dropdown
                      className="text-left"
                      id="type"
                      name="type"
                      value={formik.values.type}
                      options={[
                        { type: "Men", field: "men" },
                        { type: "Women", field: "women" },
                      ]}
                      optionLabel="type"
                      optionValue="field"
                      onChange={formik.handleChange}
                      autoFocus
                    />
                    <label htmlFor="type">Select Type*</label>
                  </span>
                </div>
                <div className="field mb-5">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText
                      id="sub_catagory"
                      name="sub_catagory"
                      value={formik.values.sub_catagory}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="sub_catagory">Sub Category*</label>
                  </span>
                </div>
                <div className="field mb-5 ">
                  <InputText
                    id="image"
                    name="image"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" label="Submit" className="mt-2 w-30rem" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategories;
