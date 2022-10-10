import { Divider } from "primereact/divider";
import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { updateTemplate } from "../../../api/api";

function UpdateTemplate() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Template Added Successfully",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Adding the Template",
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      tags: ["f107bc48-a81e-4fc3-bd94-52a8b67e7001"],
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Template Type is required.";
      }

      if (!data.price) {
        errors.price = "Price is required.";
      }

      if (!data.tags) {
        errors.tags = "Tag is Required";
      }

      return errors;
    },
    onSubmit: (data) => {
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("price", JSON.stringify(data.price));
      formdata.append("images", image[0]);
      formdata.append("tags", "f107bc48-a81e-4fc3-bd94-52a8b67e7001");
      formdata.append("tags", "b21c2a0f-6c0d-41e5-83a0-5c69ee9a5820");
      updateTemplate(formdata, id)
        .then((res) => {
          showSuccess();
          formik.resetForm();
          setTimeout(() => {
            navigate("/templates/all");
          }, 2000);
        })
        .catch((err) => showError());
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <h2 className="mb-4">Update Template</h2>
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div className="flex">
            <div className="card w-30rem mx-5 ">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="name">Template Type*</label>
                </span>
              </div>
              <div className="field mb-5">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="price"
                    name="price"
                    type="number"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="price">Price*</label>
                </span>
              </div>
              
            </div>
            <div className="card w-30rem mx-5">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="tags"
                    name="tags"
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="tags">Tags*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <InputText
                  id="images"
                  name="images"
                  type="file"
                  onChange={(e) => setImage(e.target.files)}
                />
              </div>
            </div>
          </div>

          <Button
            disabled={Object.keys(formik.errors).length}
            type="submit"
            label="Update Template"
            className="m-2 w-25rem"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateTemplate;
