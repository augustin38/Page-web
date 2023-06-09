  // line chart data
  var buyerData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
    {
        fillColor : "rgba(172,194,132,0.4)",
        strokeColor : "#ACC26D",
        pointColor : "#fff",
        pointStrokeColor : "#9DB86D",
        data : [203,156,99,251,305,247]
    }
]
}
// get line chart canvas
var buyers = document.getElementById('buyers').getContext('2d');
// draw line chart
new Chart(buyers).Line(buyerData);