import React, { useRef, useState } from "react";
import { deleteCategory, updateCategory } from "../../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";

import { Toast } from "primereact/toast";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";

function ViewCategory() {
  const [image, setImage] = useState([]);
  const [visibile, setVisible] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log(state);
  const confirm2 = (event, params) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this Fabric?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => {
        deleteCategory(params.id)
          .then((res) => {
            if (res.data === "Deleted") {
              showSuccess("Category Deleted Successfully");
              setTimeout(() => {
                navigate("/categories/all");
              }, 2000);
            }
          })
          .catch((err) => showError("Error Deleting the Category"));
      },
      reject: () => {},
    });
  };

  const toast = useRef(null);
  const showSuccess = (message) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };
  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };
  return (
    <div className="flex flex-column align-items-center justify-content-end">
      <Toast ref={toast} />
      <ConfirmPopup />
      <div className="w-7 flex  p-3 m-5">
        <div className="w-6 px-8 flex align-items-center justify-content-end">
          <img
            alt=""
            style={{ height: "350px", width: "350px" }}
            src={state.image}
          ></img>
        </div>
        <div className="w-6 px-8 flex align-items-center justify-content-start">
          <div className="text-left">
            <div className="text-5xl font-bold capitalize">
              {state.fabric_type}
            </div>
            <div className="text-xl capitalize">Type : {state.type}</div>
            <div className="text-xl capitalize">
              Sub Category : {state.sub_category}
            </div>
          </div>
        </div>
      </div>
      {visibile && (
        <div className="field mb-5 ">
          <InputText
            id="image"
            name="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button
            onClick={() => {
              const formData = new FormData();
              formData.append("image", image);
              updateCategory(params.id, formData)
                .then((res) => {
                  showSuccess("Category Image Updated Successfully");
                  setTimeout(() => {
                    navigate("/categories/all");
                  }, 2000);
                })
                .catch((err) => showError("Error Updating Category Image"));
            }}
            label="Update Image"
          ></Button>
        </div>
      )}
      <div>
        <Button
          className="m-2 w-20rem p-button-danger"
          label="Delete Fabric"
          onClick={(event) => confirm2(event, params)}
        ></Button>
        <Button
          disabled={visibile}
          onClick={() => setVisible(true)}
          className="m-2  w-20rem"
          label="Update Fabric"
        ></Button>
      </div>
    </div>
  );
}

export default ViewCategory;
