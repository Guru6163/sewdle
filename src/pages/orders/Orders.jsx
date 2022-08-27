import React, { useState, useRef, useEffect } from "react";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate, Outlet } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import MenubarDemo from "../../components/Menubar";

function Orders() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [isLoading]);

  const items = [
    { label: "All Orders", icon: "pi pi-fw pi-pencil" },
    { label: "Fabric Orders", icon: "pi pi-fw pi-pencil" },
    { label: "Collection Orders", icon: "pi pi-fw pi-pencil" },
    { label: "Template Orders", icon: "pi pi-fw pi-pencil" },
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
            navigate("fabrics");
            setActiveIndex(e.index);
            setLoading(true);
          }
          if (e.index === 2) {
            navigate("collections");
            setActiveIndex(e.index);
            setLoading(true);
          }
          if (e.index === 3) {
            navigate("templates");
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

export default Orders;
