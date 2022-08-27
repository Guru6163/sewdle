import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { ProgressSpinner } from "primereact/progressspinner";

function ListAllOrders() {
  const dummy = {
    _id: "b98696fa-14b7-4d38-aa3b-7e393dfb7ebe",
    email: "sbackshall0@stanford.edu",
    name: "Sandor",
    mobileNumber: "9287876668",
    discountPercentage: 10,
    creditPeriod: 3,
    userType: "admin",
  };

  const [data, setData] = useState(
    Array(10)
      .fill(0)
      .map((x) => Object.assign({}, dummy))
  );
  console.log(data);
  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <h2 className="m-0">All Orders</h2>
        <div>
          <InputText className="w-20rem mx-2" placeholder="Keyword Search" />
          <Button className="w-10rem mx-2" label="Search User"></Button>
        </div>
      </div>
    );
  };
  const header = renderHeader();
  return (
    <div>
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
          <Column align="center" field="userType" header="User Type"></Column>
          <Column
            align="center"
            field="discountPercentage"
            header="Discount Percentage"
          ></Column>
          <Column align="center" field="userType" header="User Type"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default ListAllOrders;
