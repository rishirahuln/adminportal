import "./App.css";
import SideBar from "./Sidebar";
import "./sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/users" element={<ListUsers />}></Route>
              <Route path="/create-user" element={<CreateUser/>}></Route>
              <Route path="/profile/:id" element={<Profile/>}></Route>
              <Route path="/edit-profile/:id" element={<EditProfile/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
