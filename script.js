Stamp = new Date();
year = Stamp.getYear();
month = "0" + (Stamp.getMonth() + 1)
if (year < 2000) year = 1900 + year;
var Hours;
var Mins;
Hours = Stamp.getHours();
Mins = Stamp.getMinutes();
if (Mins < 10) {
Mins = "0" + Mins;
}
let date = document.querySelector('date');
date.textContent = Stamp.getDate() +"/" + month + "/" + year + "/" + Hours + ":" + Mins;


var SSD = document.getElementById("SSD");
var SSD_output = document.getElementById("SSD_output");
SSD_output.innerHTML = SSD.value;
SSD.oninput = function() {
  SSD_output.innerHTML = SSD.value;
}
var RAM = document.getElementById("RAM");
var RAM_output = document.getElementById("RAM_output");
RAM_output.innerHTML = RAM.value;
RAM.oninput = function() {
  RAM_output.innerHTML = RAM.value;
}
