<?php
header("Content-Type:application/json;charset=utf-8");
require_once("init.php");
$sql="select * from lunbo";
echo json_encode(
	mysqli_fetch_all(
		mysqli_query($conn,$sql),1)
	);