<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$status = $data["status"];

$conn->query("UPDATE leave_requests SET status='$status' WHERE id=$id");

echo json_encode(["success" => true]);
?>
