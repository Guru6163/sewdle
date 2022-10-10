import React, { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { getAllCategories } from "../../../api/api";
import { useNavigate, useLocation } from "react-router-dom";

function ListAllCategories() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  console.log(allCategories);

  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res.data));
  }, []);

  const renderGridItem = (data) => {
    return (
      <div className="p-col-12 md:col-3 p-2">
        <div className="product-grid-item card p-3">
          <div
            style={{ position: "relative", right: "50px" }}
            className="text-right"
          >
            {/* <Badge className="m-1 " value={data.stock} /> */}
          </div>
          <div className="product-grid-item-content">
            <img
              style={{ width: "200px", height: "200px" }}
              src={
                data.image
                  ? data.image
                  : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1661248188~exp=1661248788~hmac=64bb7d23be8dcef15ecfef304e7d5bfe293f29bbf5b48fd6cadb282e205f9ddb"
              }
              alt={data.name}
            />
            <div className="p-1">
              <div className="product-name font-bold capitalize">
                {data.sub_category}
              </div>
              <div className="product-name capitalize">
                {/* Stocks : {data.stock} Rs */}
                <div>Gender : {data.type}</div>
              </div>
            </div>
          </div>
          <div className="text-center p-1">
            <Button
              onClick={() =>
                navigate(`/categories/${data.id}`, {
                  state: data,
                })
              }
              label="View Category"
            ></Button>
          </div>
        </div>
      </div>
    );
  };
  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderGridItem(product);
    else if (layout === "grid") return renderGridItem(product);
  };

  return (
    <div className="dataview-demo">
      <div className="card">
        <DataView
          value={allCategories}
          layout={"grid"}
          itemTemplate={itemTemplate}
          paginator
          rows={8}
        />
      </div>
    </div>
  );
}

export default ListAllCategories;
