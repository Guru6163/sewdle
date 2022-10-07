import React, { useRef, useState } from "react";
import { deleteFabric } from "../../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";

function FabricDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const confirm2 = (event, params) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this Fabric?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => {
        deleteFabric(params.id)
          .then((res) => {
            if (res.data === "Deleted") {
              showSuccess();
              setTimeout(() => {
                navigate("/fabrics/all");
              }, 2000);
            }
          })
          .catch((err) => showError());
      },
      reject: () => {},
    });
  };

  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "Fabric Deleted Successfully",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Deleting the Fabric",
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
            <div className="text-xl ">
              Cost Per Meter : {state.cost_per_metre}
            </div>
            <div className="text-xl ">Color : {state.color}</div>
            <div className="text-xl ">Stock : {state.stock}</div>
            <div className="text-xl ">Tags : Fabric</div>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="m-2 w-20rem p-button-danger"
          label="Delete Fabric"
          onClick={(event) => confirm2(event, params)}
        ></Button>
        <Button
          onClick={() => navigate("update")}
          className="m-2  w-20rem"
          label="Update Fabric"
        ></Button>
      </div>
    </div>
  );
}

export default FabricDetail;
