<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data["user_id"];
$date = $data["date"];
$reason = $data["reason"];

$conn->query("INSERT INTO leave_requests (user_id, date, reason) VALUES ('$user_id','$date','$reason')");

echo json_encode(["success" => true]);
?>
