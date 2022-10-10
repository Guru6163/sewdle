import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { getAllUsers } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { deleteUser } from "../../../api/api";
import ShowProfilePopup from "./ShowProfilePopup";

function ListAllUsers() {
  const toast = useRef(null);
  const [selectedUserId, setSelectedUserId] = useState("");
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setAllUsers(res.data));
  }, [update]);
  console.log(allUsers);
  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Deleted",
      detail: "User Deleted Successfully",
      life: 3000,
    });
  };
  const error = () => {
    toast.current.show({
      severity: "danger",
      summary: "Error",
      detail: "Error Deleting the User",
      life: 3000,
    });
  };

  const confirm2 = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this User?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () =>
        deleteUser(id).then((res) => {
          console.log(res);
          if (res.status === 200) {
            accept();
            setUpdate(!update);
          } else {
            error();
          }
        }),
    });
  };
  const roleIds = {
    "ff000000-0000-0000-0000-000000000000": "Super Admin",
    "ff000000-0000-0000-0000-000000000001": "Customer",
  };

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
  const nameBody = (data) => {
    return (
      <div
        style={{
          textTransform: "capitalize",
        }}
      >
        {data?.first_name + " " + data?.last_name}
      </div>
    );
  };

  const isActiveBody = (data) => {
    return (
      <div>
        <Checkbox checked={data.is_active} />
      </div>
    );
  };
  const deleletBody = (data) => {
    return (
      <div>
        <Button
          onClick={(event) => confirm2(event, data.id)}
          className="p-button-sm p-button-danger"
          label="Delete"
        />
      </div>
    );
  };
  const updateBody = (data) => {
    return (
      <div>
        <Button className="p-button-sm" label="Update" />
      </div>
    );
  };
  const userTypeBody = (data) => {
    return <div>{roleIds["ff000000-0000-0000-0000-000000000001"]}</div>;
  };

  const header = renderHeader();
  return (
    <div>
      <Toast ref={toast} />
      <div className="m-3">
        <ConfirmPopup />
        <DataTable
          rowHover
          onRowClick={(e) => {
            setDisplayBasic(true);
            setSelectedUserId(e.data.id);
            console.log(e);
          }}
          selectionMode="single"
          header={header}
          showGridlines
          paginator
          value={allUsers}
          className=""
          rows={10}
        >
          <Column body={nameBody} header="Full Name"></Column>
          <Column field="email" header="Email"></Column>

          <Column
            align="center"
            field="phone_number"
            header="Mobile Number"
          ></Column>
          <Column align="center" body={isActiveBody} header="Active"></Column>
          <Column
            align="center"
            body={userTypeBody}
            header="User Type"
          ></Column>
          <Column align="center" body={updateBody} header="Update"></Column>
          <Column align="center" body={deleletBody} header="Delete"></Column>
        </DataTable>
        {displayBasic && (
          <ShowProfilePopup
            displayBasic={displayBasic}
            setDisplayBasic={setDisplayBasic}
            userId={selectedUserId}
          />
        )}
      </div>
    </div>
  );
}

export default ListAllUsers;
