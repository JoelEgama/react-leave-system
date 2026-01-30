import { useEffect, useState } from "react";
import { apiGetRequests, apiUpdateStatus } from "../services/api";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    apiGetRequests().then(setRequests);
  }, []);

  function update(id, status) {
    apiUpdateStatus({ id, status }).then(() => {
      setRequests(requests.map(r => r.id === id ? { ...r, status } : r));
    });
  }

  return (
    <div style={{padding:"20px"}}>
      <h2>Admin Dashboard</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {requests.map(r => (
          <div key={r.id} style={{
            border:"1px solid gray", borderRadius:"8px",
            padding:"10px", margin:"10px", width:"250px",
            boxShadow:"0px 2px 5px rgba(0,0,0,0.2)"
          }}>
            <p><strong>User:</strong> {r.username}</p>
            <p><strong>Date:</strong> {r.date}</p>
            <p><strong>Reason:</strong> {r.reason}</p>
            <p><strong>Status:</strong> {r.status}</p>
            <button onClick={() => update(r.id, "Approved")} style={{
              marginRight:"5px", padding:"5px 10px",
              backgroundColor:"#4CAF50", color:"white", border:"none", borderRadius:"5px",
              cursor:"pointer"
            }}>Approve</button>
            <button onClick={() => update(r.id, "Rejected")} style={{
              padding:"5px 10px", backgroundColor:"#f44336",
              color:"white", border:"none", borderRadius:"5px", cursor:"pointer"
            }}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
}
