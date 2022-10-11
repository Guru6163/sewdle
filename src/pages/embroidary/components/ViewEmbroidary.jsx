import React, { useRef, useState, useEffect } from "react";
import { deleteEmbroidary, updateCategory } from "../../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Galleria } from "primereact/galleria";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { getAllCategories } from "../../../api/api";

function ViewEmbroidary() {
  const [image, setImage] = useState([]);
  const [visibile, setVisible] = useState(false);
  const { state } = useLocation();
  const [allCategories, setAllCategories] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  console.log(state);
  const confirm2 = (event, params) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this Fabric?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => {
        deleteEmbroidary(params.id)
          .then((res) => {
            if (res.data === "Deleted") {
              showSuccess("Embroidary Deleted Successfully");
              setTimeout(() => {
                navigate("/embroidary/all");
              }, 2000);
            }
          })
          .catch((err) => showError("Error Deleting the Category"));
      },
      reject: () => {},
    });
  };

  useEffect(() => {
    getAllCategories().then((res) => {
      setAllCategories(res.data);
    });
    return () => {
      setAllCategories([]);
    };
  }, []);

  const toast = useRef(null);
  const showSuccess = (message) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };
  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };
  const itemTemplate = (item) => {
    return (
      <img
        style={{ height: "300px" }}
        src={item}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        style={{ height: "100px", width: "100px" }}
        src={item}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
      />
    );
  };
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];
  return (
    <div className="flex flex-column align-items-center justify-content-end">
      <Toast ref={toast} />
      <ConfirmPopup />
      <div className="w-7 flex  p-2 m-2">
        <div className="w-6 px-8 flex align-items-center justify-content-end">
          <Galleria
            value={state.images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{ maxWidth: "640px" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </div>
        <div className="w-6 px-8 flex align-items-center justify-content-start">
          <div className="text-left">
            <div className="text-5xl font-bold capitalize">
              {state.fabric_type}
            </div>
            <div className="text-xl capitalize">
              Type : {state.embroidery_type}
            </div>
            <div className="text-xl capitalize">Price : {state.price}</div>
            {allCategories
              .filter((item) => state.tags.includes(item.id))
              .map((item) => (
                <div
                  style={{
                    backgroundColor: "#ECCFFF",
                    color: "#694382",
                    padding: ".25em 1rem",
                    borderRadius: "3px",
                    fontWeight: "700",
                    letterSpacing: ".3px",
                    margin: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.sub_category}
                </div>
              ))}{" "}
          </div>
        </div>
      </div>
      {visibile && (
        <div className="field mb-5 ">
          <InputText
            id="image"
            name="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button
            onClick={() => {
              const formData = new FormData();
              formData.append("image", image);
              updateCategory(params.id, formData)
                .then((res) => {
                  showSuccess("Category Image Updated Successfully");
                  setTimeout(() => {
                    navigate("/categories/all");
                  }, 2000);
                })
                .catch((err) => showError("Error Updating Category Image"));
            }}
            label="Update Image"
          ></Button>
        </div>
      )}
      <div>
        <Button
          className="m-2 w-20rem p-button-danger"
          label="Delete Fabric"
          onClick={(event) => confirm2(event, params)}
        ></Button>
        <Button
          disabled={visibile}
          onClick={() => setVisible(true)}
          className="m-2  w-20rem"
          label="Update Fabric"
        ></Button>
      </div>
    </div>
  );
}

export default ViewEmbroidary;
