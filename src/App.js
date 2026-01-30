import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import RequestLeave from "./pages/RequestLeave";
import Navbar from "./components/Navbar";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/leave" element={<RequestLeave />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
