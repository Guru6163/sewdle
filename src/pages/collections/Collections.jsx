import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate, Outlet } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import ListAllCollection from "./components/ListAllCollections";
import AddNewCollection from "./components/AddNewCollection";
import MenubarDemo from "../../components/Menubar";

function Collections() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [isLoading]);
  const items = [
    { label: "List All Collections", icon: "pi pi-fw pi-pencil" },
    {
      label: "Add Collections",
      icon: "pi pi-fw pi-home",
    },
  ];
  return (
    <div>
      <MenubarDemo />
      <TabMenu
        activeIndex={activeIndex}
        onTabChange={(e) => {
          setActiveIndex(e.index);
          if (e.index === 0) {
            navigate("all");
          }
          if (e.index === 1) {
            navigate("new");
          }
          setLoading(true);
        }}
        className="m-3"
        model={items}
      />

      {isLoading && (
        <div>
          <div>Loading</div>
          <div>
            <ProgressSpinner className="h-1rem" strokeWidth={3} />
          </div>
        </div>
      )}
      {!isLoading && <Outlet />}
    </div>
  );
}

export default Collections;
