import { Divider } from "primereact/divider";
import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import { createEmbroidary, getAllCategories } from "../../../api/api";
function AddEmbroidary() {
  const [allCategories, setAllCategories] = useState([]);
  const [image, setImage] = useState([]);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Embroidary Added Successfully",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Creating Embroidary",
      life: 3000,
    });
  };
  const formik = useFormik({
    initialValues: {
      price: "",
      embroidery_type: "",
      tags: [],
    },
    validate: (data) => {
      let errors = {};

      if (!data.price) {
        errors.price = "Name is required.";
      }

      if (!data.embroidery_type) {
        errors.embroidery_type =
          "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      var formdata = new FormData();
      formdata.append("price", data.price);
      formdata.append("embroidery_type", data.embroidery_type);
      data.tags.forEach((item) => {
        formdata.append("tags", item);
      });
      for (let i = 0; i < image.length; i++) {
        const file = image[i];
        formdata.append("images", file);
      }

      createEmbroidary(formdata)
        .then((res) => showSuccess())
        .catch((err) => showError());
    },
  });

  console.log(image, formik.errors);
  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res.data));
  }, []);
  return (
    <div>
      <div>
        <Toast ref={toast} />
        <Divider className="mt-5" align="center">
          <h2>Add Embroidary</h2>
        </Divider>
        <div className="flex justify-content-center">
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="flex">
              <div className="card w-30rem mx-5 ">
                <div className="field mb-5">
                  <span className="p-float-label p-input-icon-right">
                    <InputText
                      id="embroidery_type"
                      name="embroidery_type"
                      value={formik.values.embroidery_type}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="embroidery_type">Embroidary Type*</label>
                  </span>
                </div>
                <div className="field mb-5">
                  <span className="p-float-label p-input-icon-right">
                    <InputText
                      id="price"
                      name="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="price">Price*</label>
                  </span>
                </div>
                <div className="field mb-5 ">
                  <span className="p-float-label">
                    <MultiSelect
                      display="chip"
                      id="tags"
                      name="tags"
                      value={formik.values.tags}
                      optionLabel="sub_category"
                      optionValue="id"
                      options={allCategories}
                      onChange={formik.handleChange}
                      autoFocus
                    />
                    <label htmlFor="tags">Tags*</label>
                  </span>
                </div>
                <div className="field mb-5 ">
                  <InputText
                    id="image"
                    name="image"
                    type="file"
                    multiple
                    onChange={(e) => {
                      setImage(e.target.files);
                    }}
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

export default AddEmbroidary;
