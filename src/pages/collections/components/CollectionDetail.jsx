import React from "react";
import MenubarDemo from "../../../components/Menubar";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";

function CollectionDetail() {
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="flex flex-column align-items-center justify-content-end">
      <div
        // style={{
        //   boxShadow: "0px 0px 20px rgb(0,0,0,0.3)",
        //   borderRadius: "10px 50px",
        // }}
        className="w-8 flex  p-3 m-5"
      >
        <div className="w-6 px-8 flex align-items-center justify-content-end">
          <img
            alt=""
            style={{ height: "400px", width: "400px" }}
            src={state.image}
          ></img>
        </div>
        <div className="w-6 px-8 flex align-items-center justify-content-start">
          <div className="text-left">
            <div className="text-5xl font-bold">{state.name}</div>
            <div className="text-xl ">Main Category : Fabric</div>
            <div className="text-xl ">Sub Category : Fabric</div>
            <div className="text-xl ">Description : Fabric</div>
            <div className="text-xl ">Fabric Maintainance : Fabric</div>
            <div className="text-xl ">Price : Fabric</div>
            <div className="text-xl ">Size : Fabric</div>
            <div className="text-xl ">Specifications : Fabric</div>
            <div className="text-xl ">
              Description : Fabric Maintainance Fabric Maintainance Fabric
              Maintainance Fabric Maintainance Fabric Maintainance
            </div>
            <div className="text-xl ">
              Fabric Maintainance : Fabric Maintainance Fabric Maintainance
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <Button
          className="m-2 w-20rem p-button-danger"
          label="Delete Fabric"
        ></Button>
        <Button className="m-2  w-20rem" label="Update Fabric"></Button>
      </div>
    </div>
  );
}

export default CollectionDetail;
