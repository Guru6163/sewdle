import React, { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";
import { useNavigate, Outlet } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import MenubarDemo from "../../components/Menubar";


function Users() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  const items = [
    { label: "List All Users", icon: "pi pi-fw pi-pencil" },
    {
      label: "Add Users",
      icon: "pi pi-fw pi-home",
    },
    { label: "Add Measurements", icon: "pi pi-fw pi-calendar" },
  ];

  return (
    <div className="w-full">
      <MenubarDemo />
      <div className="">
        <Toast ref={toast} position="top-center" />
        <TabMenu
          activeIndex={activeIndex}
          onTabChange={(e) => {
            if (e.index === 0) {
              setActiveIndex(e.index);

              navigate("allUsers");
            }
            if (e.index === 1) {
              navigate("addUsers");
              setActiveIndex(e.index);
            }
            if (e.index === 2) {
              navigate("addMeasurements");
              setActiveIndex(e.index);
            }
          }}
          className="m-3"
          model={items}
        />

        <Outlet />
      </div>
    </div>
  );
}

export default Users;
