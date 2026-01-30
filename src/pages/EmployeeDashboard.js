import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGetRequests } from "../services/api";

export default function EmployeeDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    apiGetRequests().then(data => setRequests(data.filter(r => r.user_id == user.id)));
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h2>Employee Dashboard</h2>
      <p><strong>Leave Balance:</strong> {user.leave_balance}</p>
      <Link to="/leave"><button style={{
        padding:"10px 15px", backgroundColor:"#2d89ef",
        color:"white", border:"none", borderRadius:"5px", cursor:"pointer",
        marginBottom:"15px"
      }}>Request Leave</button></Link>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {requests.map(r => (
          <div key={r.id} style={{
            border:"1px solid gray", borderRadius:"8px",
            padding:"10px", margin:"10px", width:"250px",
            boxShadow:"0px 2px 5px rgba(0,0,0,0.2)"
          }}>
            <p><strong>Date:</strong> {r.date}</p>
            <p><strong>Reason:</strong> {r.reason}</p>
            <p><strong>Status:</strong> {r.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
