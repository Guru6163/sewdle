import "./App.css";
import Menubar from "./components/Menubar";
import ListAllUsers from "./pages/ListAllUsers/ListAllUsers";
import AddNewUser from "./pages/ListAllUsers/components/AddNewUser";
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
function App() {
  return (
    <div className="App">
      <Routes></Routes>

      <div className="">
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
          <Route path="orders" element={<Templates />}>
            <Route path="fabrics" element={<ListAllCollections />} />
            <Route path="collections" element={<AddNewCollection />} />
            <Route path="templates" element={<CollectionDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
