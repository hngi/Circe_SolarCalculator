var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "275px") {
	nav.style.height = "50px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	};
    	
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "275px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
	
	}

};

function getElectronic(){
    document.getElementById('text-value').innerHTML =
    (`To run your ${select[select.selectedIndex].value} you need:`);
};

function getElectronics(){
    document.getElementById('text-value').innerHTML =
    (`To run your ${select[select.selectedIndex].value} you need:`);
};

document.getElementById('add').addEventListener('click', 
 newAppliance = (e) =>{
	e.preventDefault();
	let result;
	result+=`<nav>
	CIRCE
</nav>
<body>
<div id="topNav" class="navigation">
		<span id="closebtn" onclick="navToggle()">
			<span class="line1"></span>
			<span class="line2"></span>
			<span class="line3"></span>
		</span>
	  <div class="logo">
		<img src=""/>
	  </div>
	  
	  <ul class="menulist">
	  <li><a class="menuitems" href="calculate.html">Calculator</a></li>		
	  <li><a class="menuitems" href="faq.html">FAQs</a></li>
	  </ul>			
	  </div>
	  <div id="drop"></div>

	<h1> Solar Calculator App</h1>

	<h3>How much solar power do i need ?</h3>
	  
	
	<div id="form-content">

	<div id="electQty">
		<p><label for="select" name="elect" >Electronic Type</label><br/>
		<select name="select" id="select" onchange="getElectronic()">
			<option value="Television">Television</option>
			<option value="Home Theatre">Home Theatre</option>
			<option value="Pressing Iron">Pressing iron</option>
			<option value="Refridgerator">Refridgerator</option>
			<option value="Electric Cooker">Electric Cooker</option>
			<option value="Air conditioner">Air conditioner</option>
			<option value="Water Heater">Water Heater</option>
		</select>
	</p>
	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		<p><label for="Quantity">Quantity</label></br>
		<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
		</p>
		</div>
		<div id="hoursPower">
		<p><label for="hours">Hours of use per day</label><br>
		<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
		</p>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<p>
			<label id="power">Power Consumption (Watts)</label><br/>
			<input type="text" id="power" required/>
		</p>
	</div>
		<div id="wattBatt">
		   <p> <label id="solar">Solar Panel Wattage</label><br/>
			<input type="text" id="solar" required/>
		</p>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

			<p><label id="battery">Battery Capacity (Ah)</label><br/>
			<input type="text" id="battery" required/><br/>
		</p>
	</div>
	<hr>
	<div id="electQty">
		<p><label for="select" name="elect" >Electronic Type</label><br/>
		<select name="select" id="select" onchange="getElectronics()">
			<option value="Television">Television</option>
			<option value="Home Theatre">Home Theatre</option>
			<option value="Pressing Iron">Pressing iron</option>
			<option value="Refridgerator">Refridgerator</option>
			<option value="Electric Cooker">Electric Cooker</option>
			<option value="Air conditioner">Air conditioner</option>
			<option value="Water Heater">Water Heater</option>
		</select>
	</p>
	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		<p><label for="Quantity">Quantity</label></br>
		<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
		</p>
		</div>
		<div id="hoursPower">
		<p><label for="hours">Hours of use per day</label><br>
		<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
		</p>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<p>
			<label id="power">Power Consumption (Watts)</label><br/>
			<input type="text" id="power" required/>
		</p>
	</div>
		<div id="wattBatt">
		   <p> <label id="solar">Solar Panel Wattage</label><br/>
			<input type="text" id="solar" required/>
		</p>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

			<p><label id="battery">Battery Capacity (Ah)</label><br/>
			<input type="text" id="battery" required/><br/>
		</p>
	</div>
		<div id="rect"> 
			<div id="text-value">
			To run your Television you need: <br/>
		</div>
			<input type="text" id="value">
		
			<div id="circe-power">Powered By Circe Energy</div>
		</div>
		
		<button id="but"><div id="calc"><a href="#"> Calculate </a></div></button>
		
	</div><br/>
		<footer>
				&copy; 2019 Circe HNG. All rights reserved
		</footer>
		<script type="text/javascript" src="script1.js"></script>`;
document.getElementById('master').innerHTML = result;
}
);
	

