import React, { useState, useRef, useEffect } from "react";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate, Outlet } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import ListAllTemplates from "./components/ListAllTemplates";
import AddNewTemplate from "./components/AddNewTemplate";
import MenubarDemo from "../../components/Menubar";

function Templates() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [isLoading]);
  const items = [
    { label: "List All Templates", icon: "pi pi-fw pi-pencil" },
    {
      label: "Add Templates",
      icon: "pi pi-fw pi-home",
    },
  ];
  return (
    <div>
      <MenubarDemo />
      <TabMenu
        activeIndex={activeIndex}
        onTabChange={(e) => {
          if (e.index === 0) {
            setActiveIndex(e.index);
            setLoading(true);
            navigate("all");
          }
          if (e.index === 1) {
            navigate("new");
            setActiveIndex(e.index);
            setLoading(true);
          }
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

export default Templates;