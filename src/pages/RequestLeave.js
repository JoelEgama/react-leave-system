import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSendRequest } from "../services/api";

export default function RequestLeave() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  function submit() {
    if (!date || !reason) return alert("Please fill all fields");
    apiSendRequest({ user_id: user.id, date, reason }).then(() => {
      navigate("/employee");
    });
  }

  return (
    <div style={{padding:"20px"}}>
      <h2>Request Leave</h2>
      <input type="date" onChange={e => setDate(e.target.value)} style={{padding:"10px", margin:"10px"}} />
      <input placeholder="Reason" onChange={e => setReason(e.target.value)} style={{padding:"10px", margin:"10px"}} />
      <br />
      <button onClick={submit} style={{
        padding:"10px 15px", backgroundColor:"#2d89ef",
        color:"white", border:"none", borderRadius:"5px", cursor:"pointer"
      }}>Submit</button>
    </div>
  );
}
