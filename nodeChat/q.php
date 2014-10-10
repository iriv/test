<?php
	$data = file_get_contents("http://localhost:8888/?mes="  . $_GET["mes"]);
	echo $data;
?>

