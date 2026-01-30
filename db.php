<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "react_leaves");
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}
?>
