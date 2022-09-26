import React, { useState, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function ListAllFabrics() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "Rosy",
      inventoryStatus: "JHS",
      image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      name: "Jones-Ullrich",
      description: "Namfix",
      price: 4460,
    },
    {
      id: 2,
      category: "Estella",
      inventoryStatus: "SPXX",
      image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      name: "Considine, Ruecker and Ruecker",
      description: "Latlux",
      price: 8147,
    },
    {
      id: 3,
      category: "Neall",
      inventoryStatus: "NETE",
      image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      name: "Green-Roberts",
      description: "Ronstring",
      price: 3508,
    },
    {
      id: 4,
      category: "Lynne",
      inventoryStatus: "JPT",
      image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      name: "Metz, Shanahan and Wehner",
      description: "Toughjoyfax",
      price: 9898,
    },
    {
      id: 5,
      category: "Karlene",
      inventoryStatus: "TCRZ",
      image: "http://dummyimage.com/250x250.png/dddddd/000000",
      name: "Hermiston, Veum and Doyle",
      description: "Overhold",
      price: 1857,
    },
    {
      id: 7,
      category: "Rachel",
      inventoryStatus: "SKOR",
      image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      name: "Skiles, Schultz and Turcotte",
      description: "Keylex",
      price: 9308,
    },
    {
      id: 8,
      category: "Tabbatha",
      inventoryStatus: "SHOS",
      image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      name: "Becker, Hansen and Adams",
      description: "Solarbreeze",
      price: 8309,
    },
    {
      id: 9,
      category: "Neda",
      inventoryStatus: "WSTL",
      image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
      name: "Moore-Veum",
      description: "Bigtax",
      price: 1424,
    },
    {
      id: 8,
      category: "Tabbatha",
      inventoryStatus: "SHOS",
      image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      name: "Becker, Hansen and Adams",
      description: "Solarbreeze",
      price: 8309,
    },
    {
      id: 9,
      category: "Neda",
      inventoryStatus: "WSTL",
      image: "http://dummyimage.com/250x250.png/ff4444/ffffff",
      name: "Moore-Veum",
      description: "Bigtax",
      price: 1424,
    },
  ]);

  const renderGridItem = (data) => {
    return (
      <div className="p-col-12 md:col-3 p-2">
        <div className="product-grid-item card p-3">
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
              <div className="product-name">{data.name || "First Name"}</div>
              <div className="product-name font-bold">
                {data.price || "Description"} Rs
              </div>
            </div>
          </div>
          <div className="text-center p-1">
            <Button
              onClick={() =>
                navigate(`/fabrics/${data.id}`, {
                  state: data,
                })
              }
              label="View Product"
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
        
          value={products}
          layout={"grid"}
          itemTemplate={itemTemplate}
          paginator
          rows={8}
        />
      </div>
    </div>
  );
}

export default ListAllFabrics;
