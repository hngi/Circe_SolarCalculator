<!DOCTYPE html>
<html>
<head>
	<title>form</title>
</head>
<body>
		<center>
			<main>
				<H1> INSERT YOUR ELECTRONICS DETAILS HERE</H1>
			
				<form action="insert.php" method="POST">
					
					<div>
						<p>ELECTRONICS TYPE</p>
						<input type="text" name="name" placeholder="ELECTRONICS">
					</div>

					<div>
						<p>POWER CONSUMPTION (IN WATTS)</p>
						<input type="number" name="watts" placeholder="WATTS">
					</div>

					<div>
						<button name="submit">INSERT</button>
					</div>
							
				</form>
			</main>
		</center>


</body>
</html>