import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./Menubar";

function DefaultOutlet() {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
}
function NestedOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export { DefaultOutlet, NestedOutlet };
