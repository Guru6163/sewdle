import { Divider } from "primereact/divider";
import React, { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";

import { Button } from "primereact/button";
import { addFabric, getAllCategories } from "../../../api/api";

function AddNewFabric() {
  const [allCategories, setAllCategories] = useState([]);
  const [image, setImage] = useState([]);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Fabric Added Successfully",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Adding the Fabric",
      life: 3000,
    });
  };

  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      fabric_type: "",
      cost_per_metre: "",
      stock: "",
      color: "",
      tags: [],
    },
    validate: (data) => {
      let errors = {};

      if (!data.fabric_type) {
        errors.fabric_type = "Fabric Type is required.";
      }

      if (!data.cost_per_metre) {
        errors.cost_per_metre = "Cost Per Metre is required.";
      }

      if (!data.stock) {
        errors.stock = "Stock is required.";
      }

      if (!data.color) {
        errors.color = "Color is Required";
      }
      if (!data.tags) {
        errors.tags = "Tag is Required";
      }

      return errors;
    },
    onSubmit: (data) => {
      const formdata = new FormData();
      formdata.append("fabric_type", data.fabric_type);
      formdata.append("cost_per_metre", JSON.stringify(data.cost_per_metre));
      formdata.append("stock", JSON.stringify(data.stock));
      formdata.append("color", data.color);
      data.tags.forEach((item) => {
        formdata.append("tags", item);
      });
      formdata.append("image", image[0]);
      addFabric(formdata)
        .then((res) => {
          showSuccess();
          formik.resetForm();
        })
        .catch((err) => showError());
    },
  });
  console.log(formik.values);
  return (
    <div>
      <h2 className="mb-4">Add Fabrics</h2>
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
          <div className="flex">
            <div className="card w-30rem mx-5 ">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="fabric_type"
                    name="fabric_type"
                    value={formik.values.fabric_type}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="fabric_type">Fabric Type*</label>
                </span>
              </div>
              <div className="field mb-5">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="cost_per_metre"
                    name="cost_per_metre"
                    type="number"
                    value={formik.values.cost_per_metre}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="cost_per_metre">Cost Per Metre*</label>
                </span>
              </div>
              <div className="field mb-5 ">
                <InputText
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files)}
                />
              </div>
            </div>
            <div className="card w-30rem mx-5">
              <div className="field mb-5 ">
                <span className="p-float-label">
                  <InputText
                    id="color"
                    name="color"
                    value={formik.values.color}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  <label htmlFor="color">Color*</label>
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
              <div className="field mb-5">
                <span className="p-float-label">
                  <InputText
                    id="stock"
                    name="stock"
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    type="number"
                  />
                  <label htmlFor="stock">Stock*</label>
                </span>
              </div>
            </div>
          </div>

          <Button
            disabled={Object.keys(formik.errors).length}
            type="submit"
            label="Submit"
            className="m-2 w-25rem"
          />
        </form>
      </div>
    </div>
  );
}

export default AddNewFabric;
