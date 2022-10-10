import "./App.css";
import ListAllUsers from "./pages/users/components/ListAllUsers";
import { Routes, Route } from "react-router-dom";
import Fabrics from "./pages/fabrics/Fabrics";
import Collections from "./pages/collections/Collections";
import Templates from "./pages/templates/Templates";
import Login from "./pages/login/Login";
import FabricDetail from "./pages/fabrics/components/FabricDetail";
import ListAllFabrics from "./pages/fabrics/components/ListAllFabrics";
import AddNewFabric from "./pages/fabrics/components/AddNewFabric";
import ListAllCollections from "./pages/collections/components/ListAllCollections";
import AddNewCollection from "./pages/collections/components/AddNewCollection";
import CollectionDetail from "./pages/collections/components/CollectionDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";
import ListAllOrders from "./pages/orders/components/ListAllOrders";
import ListCollectionOrders from "./pages/orders/components/ListCollectionOrders";
import ListTemplateOrders from "./pages/orders/components/ListTemplateOrders";
import ListFabricOrders from "./pages/orders/components/ListFabricOrders";
import Users from "./pages/users/Users";
import AddNewUser from "./pages/users/components/AddNewUser";
import AddMeasurements from "./pages/users/components/AddMeasurement";
import { DefaultOutlet, NestedOutlet } from "./components/Outlet";
import EditMeasurement from "./pages/users/components/EditMeasurement";
import UpdateFabric from "./pages/fabrics/components/UpdateFabric";
import ListAllTemplates from "./pages/templates/components/ListAllTemplates";
import AddNewTemplate from "./pages/templates/components/AddNewTemplate";
import TemplateDetail from "./pages/templates/components/TemplateDetail";
import UpdateTemplate from "./pages/templates/components/UpdateTemplate";
import Categories from "./pages/categories/Categories";
import AddCategories from "./pages/categories/components/AddCategories";
import ListAllCategories from "./pages/categories/components/ListAllCategories";
import ViewCategory from "./pages/categories/components/ViewCategory";

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <div>
        <Routes>
          <Route path="" element={<Login />} />

          <Route path="users" element={<DefaultOutlet />}>
            <Route path="" element={<Users />}>
              <Route path="" element={<NestedOutlet />}>
                <Route path="allUsers" element={<NestedOutlet />}  >
                  <Route path="" element={<ListAllUsers />}></Route>
                  <Route path=":id/:id" element={<EditMeasurement />}></Route>
                </Route>
                <Route path="addUsers" element={<AddNewUser />} />
                <Route path="addMeasurements" element={<AddMeasurements />} />
              </Route>
            </Route>
          </Route>
          <Route path="categories" element={<DefaultOutlet />}>
            <Route path="" element={<Categories />}>
              <Route path="" element={<NestedOutlet />}>
                <Route path="all" element={<ListAllCategories />} />
                <Route path="addNewCategory" element={<AddCategories />} />
                <Route path=":id" element={<ViewCategory />}></Route>
              </Route>
            </Route>
          </Route>

          {/* <Route path="users" element={<Users />}>
            <Route path="allUsers" element={<ListAllUsers />} />
            <Route path="addUsers" element={<AddNewUser />} />
            <Route path="addMeasurements" element={<AddMeasurements />} />
          </Route> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="fabrics" element={<Fabrics />}>
            <Route path="all" element={<ListAllFabrics />} />
            <Route path="new" element={<AddNewFabric />} />
            <Route path=":id" element={<NestedOutlet />} >
              <Route path="" element={<FabricDetail />} ></Route>
              <Route path="update" element={<UpdateFabric />} ></Route>
            </Route>
          </Route>
          <Route path="collections" element={<Collections />}>
            <Route path="all" element={<ListAllCollections />} />
            <Route path="new" element={<AddNewCollection />} />
            <Route path=":id" element={<CollectionDetail />} />
          </Route>
          <Route path="templates" element={<Templates />}>
            <Route path="all" element={<ListAllTemplates />} />
            <Route path="new" element={<AddNewTemplate />} />
            <Route path=":id" element={<NestedOutlet />} >
              <Route path="" element={<TemplateDetail />} ></Route>
              <Route path="update" element={<UpdateTemplate />} ></Route>
            </Route>
          </Route>
          <Route path="orders" element={<Orders />}>
            <Route path="all" element={<ListAllOrders />} />
            <Route path="fabrics" element={<ListFabricOrders />} />
            <Route path="collections" element={<ListCollectionOrders />} />
            <Route path="templates" element={<ListTemplateOrders />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
