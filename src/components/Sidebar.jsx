import React from "react";
import { Divider } from "primereact/divider";
function Sidebar() {
  return (
    <div
      style={{
        background: "#091A32",
        borderStyle: "none",
        borderRadius: "0px",
        color: "white",
      }}
      className="w-2 h-screen"
    >
      <div className="flex flex-column ">
        <div className="flex justify-content-center align-items-center">
          <div
            className="text-5xl my-5 mx-2  font-bold"
            style={{
              letterSpacing: "15px",
              color: "white",
            }}
          >
            SEWDLE
          </div>
        </div>

        <div className="text-left ">
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Dashboard</span>
          </div>
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Users</span>
          </div>
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Fabrics</span>
          </div>
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Collections</span>
          </div>
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Templates</span>
          </div>
          <div
            className="text-white mb-4 mx-6 text-l"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
