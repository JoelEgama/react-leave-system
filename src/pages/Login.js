import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    apiLogin({ username, password }).then(data => {
      if (data.error) return alert(data.error);
      localStorage.setItem("user", JSON.stringify(data));
      navigate(data.role === "admin" ? "/admin" : "/employee");
    });
  }

  return (
    <div style={{
      display:"flex", justifyContent:"center", alignItems:"center",
      height:"80vh", flexDirection:"column", backgroundColor:"#f2f2f2"
    }}>
      <h2 style={{marginBottom:"20px"}}>Login</h2>
      <input 
        placeholder="Username" 
        onChange={e => setUsername(e.target.value)}
        style={{margin:"5px", padding:"10px", width:"200px"}}
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={e => setPassword(e.target.value)}
        style={{margin:"5px", padding:"10px", width:"200px"}}
      />
      <button 
        onClick={handleLogin} 
        style={{
          marginTop:"10px", padding:"10px 20px",
          backgroundColor:"#2d89ef", color:"white",
          border:"none", borderRadius:"5px", cursor:"pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}
