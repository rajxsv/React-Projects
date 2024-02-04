import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex" >
        <SidePanel />
        <Outlet />
      </div>
    </>
  );
}

export default App;
