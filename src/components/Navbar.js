import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav style={{
      display:"flex", justifyContent:"space-between",
      padding:"10px 20px", backgroundColor:"#2d89ef",
      color:"white", alignItems:"center"
    }}>
      <h2>Leave Management System</h2>
      {user && (
        <div>
          <span style={{marginRight:"15px"}}>{user.username} ({user.role})</span>
          <button onClick={logout} style={{
            padding:"5px 10px", backgroundColor:"white",
            color:"#2d89ef", border:"none", borderRadius:"5px",
            cursor:"pointer"
          }}>Logout</button>
        </div>
      )}
    </nav>
  );
}
