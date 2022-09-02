import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import AddNewUser from "./components/AddNewUser";
import { ProgressSpinner } from "primereact/progressspinner";
import MenubarDemo from "../../components/Menubar";
import AddMeasurements from "./components/AddMeasurements";

function ListAllUsers() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [activeIndex]);

  const items = [
    { label: "List All Users", icon: "pi pi-fw pi-pencil" },
    {
      label: "Add Users",
      icon: "pi pi-fw pi-home",
    },
    { label: "Add Measurements", icon: "pi pi-fw pi-calendar" },
  ];
  console.log(activeIndex);
  const data = [
    {
      _id: "b98696fa-14b7-4d38-aa3b-7e393dfb7ebe",
      email: "sbackshall0@stanford.edu",
      name: "Sandor",
      mobileNumber: "9287876668",
      discountPercentage: 10,
      creditPeriod: 3,
      userType: "admin",
    },
    {
      _id: "d21ec04a-da7a-4ccc-97ea-ff0c5cd0bd21",
      email: "shartus1@fc2.com",
      name: "Shawn",
      mobileNumber: "4277948809",
      discountPercentage: 58,
      creditPeriod: 29,
      userType: "Staff",
    },
    {
      _id: "f40e73c9-6354-4985-b789-ea63b3bdebff",
      email: "disaaksohn2@drupal.org",
      name: "Dennie",
      mobileNumber: "1792876678",
      discountPercentage: 5,
      creditPeriod: 16,
      userType: "Retailer",
    },

    {
      _id: "900219f5-dff4-410d-8e58-024fdecae31f",
      email: "aocorhane8@nbcnews.com",
      name: "Austin",
      mobileNumber: "6951697553",
      discountPercentage: 18,
      creditPeriod: 4,
      userType: "admin",
    },
    {
      _id: "73561e21-1307-444f-a6cf-30139d9d9ef0",
      email: "apersence9@discuz.net",
      name: "Andros",
      mobileNumber: "2819215525",
      discountPercentage: 71,
      creditPeriod: 0,
      userType: "Staff",
    },
  ];
  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <h2 className="m-0">Customers</h2>
        <div>
          <InputText className="w-20rem mx-2" placeholder="Keyword Search" />
          <Button className="w-10rem mx-2" label="Search User"></Button>
        </div>
      </div>
    );
  };
  const header = renderHeader();

  return (
    <div className="w-full">
      {/* <Divider className="mt-5" align="center">
        <h2>All Users</h2>
      </Divider> */}
      <MenubarDemo />
      <div className="">
        <Toast ref={toast} position="top-center" />
        <TabMenu
          activeIndex={activeIndex}
          onTabChange={(e) => {
            setActiveIndex(e.index);
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
        {activeIndex === 0 && !isLoading && (
          <div className="m-3">
            <DataTable
              header={header}
              showGridlines
              value={data}
              paginator
              className=""
              rows={10}
            >
              <Column field="email" header="Email"></Column>
              <Column field="name" header="Name"></Column>
              <Column
                align="center"
                field="mobileNumber"
                header="Mobile Number"
              ></Column>
              <Column
                align="center"
                field="userType"
                header="User Type"
              ></Column>
              <Column
                align="center"
                field="discountPercentage"
                header="Discount Percentage"
              ></Column>
              <Column
                align="center"
                field="userType"
                header="User Type"
              ></Column>
            </DataTable>
          </div>
        )}
        {activeIndex === 1 && !isLoading && <AddNewUser />}
        {activeIndex === 2 && !isLoading && <AddMeasurements />}
      </div>
    </div>
  );
}

export default ListAllUsers;
