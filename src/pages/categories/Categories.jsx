import React, { useState, useRef, useEffect } from "react";

import { TabMenu } from "primereact/tabmenu";
import { useNavigate, Outlet } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import MenubarDemo from "../../components/Menubar";

function Categories() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [isLoading]);
  const items = [
    { label: "List All Categories", icon: "pi pi-fw pi-pencil" },
    {
      label: "Add Categories",
      icon: "pi pi-fw pi-home",
    },
  ];
  return (
    <div>
      <TabMenu
        activeIndex={activeIndex}
        onTabChange={(e) => {
          setActiveIndex(e.index);
          if (e.index === 0) {
            navigate("all");
          }
          if (e.index === 1) {
            navigate("addNewCategory");
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

export default Categories;
