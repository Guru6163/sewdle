import "./App.css";
import ListAllUsers from "./pages/ListAllUsers/ListAllUsers";
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

function App() {
  return (
    <div className="App">
      <Routes></Routes>

      <div>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="allUsers" element={<ListAllUsers />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="fabrics" element={<Fabrics />}>
            <Route path="all" element={<ListAllFabrics />} />
            <Route path="new" element={<AddNewFabric />} />
            <Route path=":id" element={<FabricDetail />} />
          </Route>
          <Route path="collections" element={<Collections />}>
            <Route path="all" element={<ListAllCollections />} />
            <Route path="new" element={<AddNewCollection />} />
            <Route path=":id" element={<CollectionDetail />} />
          </Route>
          <Route path="templates" element={<Templates />}>
            <Route path="all" element={<ListAllCollections />} />
            <Route path="new" element={<AddNewCollection />} />
            <Route path=":id" element={<CollectionDetail />} />
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
