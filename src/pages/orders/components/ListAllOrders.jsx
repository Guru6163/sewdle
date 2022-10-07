import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { getAllOrders } from "../../../api/api";
import { ProgressSpinner } from "primereact/progressspinner";

function ListAllOrders() {
  const [allOrders, setAllorders] = useState([]);
  console.log(allOrders);
  useEffect(() => {
    getAllOrders().then((res) => setAllorders(res.data));
  }, []);

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
          value={allOrders}
          paginator
          className=""
          rows={10}
        >
          <Column field="order_display_id" header="Order ID"></Column>
          <Column field="user.email" header="Email"></Column>
          <Column field="user.first_name" header="Name"></Column>
          <Column
            align="center"
            field="user.phone_number"
            header="Mobile Number"
          ></Column>
          <Column
            align="center"
            bodyClassName="capitalize"
            field="order_type"
            header="Order Type"
          ></Column>
          <Column
            align="center"
            bodyClassName="capitalize"
            field="payment_status"
            header="Payment Status"
          ></Column>
          <Column
            align="center"
            field="razorpay_payment_id"
            header="Payment ID"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default ListAllOrders;
