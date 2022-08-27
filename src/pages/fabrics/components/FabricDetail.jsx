import React from "react";
import MenubarDemo from "../../../components/Menubar";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";

function FabricDetail() {
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="flex flex-column align-items-center justify-content-end">
      <div
        // style={{
        //   boxShadow: "0px 0px 20px rgb(0,0,0,0.3)",
        //   borderRadius: "10px 50px",
        // }}
        className="w-7 flex  p-3 m-5"
      >
        <div className="w-6 px-8 flex align-items-center justify-content-end">
          <img
            alt=""
            style={{ height: "350px", width: "350px" }}
            src={state.image}
          ></img>
        </div>
        <div className="w-6 px-8 flex align-items-center justify-content-start">
          <div className="text-left">
            <div className="text-5xl font-bold">{state.name}</div>
            <div className="text-xl ">Price Per Meter : Fabric</div>
            <div className="text-xl ">Category : Fabric</div>
            <div className="text-xl ">Stock : Fabric</div>
            <div className="text-xl ">Tags : Fabric</div>
            <div className="text-xl ">Name : Fabric</div>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="m-2 w-20rem p-button-danger"
          label="Delete Fabric"
        ></Button>
        <Button className="m-2  w-20rem" label="Update Fabric"></Button>
      </div>
    </div>
  );
}

export default FabricDetail;
