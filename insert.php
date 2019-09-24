<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

	//including the database file
	include_once 'datab.php';

	// PHP variables
	
	$elect_type 	= 	filter_var($_POST["name"], FILTER_SANITIZE_STRING);	
	$watts 			= 	filter_var($_POST["watts"], FILTER_SANITIZE_STRING);
	


	//CHECKING FOR EMPTY FORMS
	if (empty($elect_type)){
		die("Please enter your electronics name");
	}
	
	if (empty($watts)){
		die("Please enter electronic watts");
	}



	//Output any connection error
	if ($conn->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}


	 //prepare sql insert query
	$stmt = $conn->prepare("INSERT INTO electronics ( elect_type, power_consumption) VALUES (?,?)");


	//bind parameters for markers, where (s = string, i = integer, d = double,  b = blob)
	$stmt->bind_param('ss', $elect_type, $watts); 
	
	if($stmt->execute()){
		print "your electronics and its description has been saved successfully!";
	}else{
		print $mysqli->error; //show mysql error if any
	}
}
