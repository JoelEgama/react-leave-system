<?php
include "db.php";

$sql = "SELECT lr.*, u.username FROM leave_requests lr JOIN users u ON lr.user_id=u.id";
$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
