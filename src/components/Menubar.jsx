import React from "react";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
const MenubarDemo = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Dashboard",
      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/dashboard")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Users",

      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/users/allUsers")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Categories",
      icon: "pi pi-fw pi-pencil",

      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/categories/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
    {
      label: "Embroidary",
      icon: "pi pi-fw pi-pencil",

      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/fabrics/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
    {
      label: "Fabrics",
      icon: "pi pi-fw pi-pencil",

      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/fabrics/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
    {
      label: "Collections",
      icon: "pi pi-fw pi-user",
      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/collections/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
    {
      label: "Templates",
      icon: "pi pi-fw pi-calendar",
      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/templates/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
    {
      label: "Orders",
      icon: "pi pi-fw pi-power-off",
      template: (item, options) => {
        return (
          <div
            onClick={() => navigate("/orders/all")}
            className="text-white m-3 text-sm"
            style={{ cursor: "pointer", letterSpacing: "1px" }}
          >
            <span>{item.label}</span>
          </div>
        );
      },
    },
  ];

  const start = (
    <div
      className="text-5xl font-bold"
      style={{
        padding: ".25em 1rem",
        letterSpacing: "15px",
        color: "white",
      }}
    >
      SEWDLE
    </div>
  );

  return (
    <div>
      <div>
        <Menubar
          style={{
            background: "#091A32",
            borderStyle: "none",
            borderRadius: "0px",
          }}
          className="h-6rem text-white p-0 m-0"
          model={items}
          start={start}
          end={
            <Button
              className="  m-3  p-button-sm"
              label="Logout"
              onClick={() => navigate("/")}
              icon="pi pi-power-off"
            />
          }
        />
      </div>
    </div>
  );
};
export default MenubarDemo;
