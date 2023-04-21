// date

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

//frise_carte_graphique

const graphic_card_frises = document.getElementById('graphic_card_canvas').getContext('2d');
const graphic_card_canvas = new Chart(graphic_card_frises, {
  type: 'line',
  data: {
      labels: ["2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022",],
      datasets: [
          {
              data: [0, 0, 0, 0, 0, 244, 170, 145, 180, 250, 350, 450,],
              borderColor: "#0066CC",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              label: "consommation d'énergie (W)",
              cubicInterpolationMode: 'monotone',
              fill: false,
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
              data: [0, 0, 0, 0, 0, 51.2, 130.0, 166.0, 256.0, 435.2, 1049.6, 1638.4,],
              borderColor: "#ff8000",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              cubicInterpolationMode: 'monotone',
              fill: false,
              label: "puissance (nb coeurs) X10",
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
            data: [0, 0, 0, 0, 0, 0, 280, 357, 725, 1250, 1549, 1819,],
            borderColor: "#00CC00",
            pointBackgroundColor: '#d200f7',
            pointBorderColor: '#fff',
            cubicInterpolationMode: 'monotone',
            fill: false,
            label: "prix d'achat",
            pointRadius: 3.6,
            pointHoverRadius: 7.6,
        },
      ],
  },
  options: {
      scales: {
          y: {

          }
      },
      animations: {
          y: {
              easing: 'easeInOutElastic'
          }
      },
  }
});

//frise_memoire

const memory_frises = document.getElementById('memory_canvas').getContext('2d');
const memory_canvas = new Chart(memory_frises, {
  type: 'line',
  data: {
      labels: ["2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022",],
      datasets: [
          {
              data: [0, 0, 0, 0, 0, 244, 170, 145, 180, 250, 350, 450,],
              borderColor: "#0066CC",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              label: "consommation d'énergie (W)",
              cubicInterpolationMode: 'monotone',
              fill: false,
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
              data: [0, 0, 0, 0, 0, 51.2, 130.0, 166.0, 256.0, 435.2, 1049.6, 1638.4,],
              borderColor: "#ff8000",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              cubicInterpolationMode: 'monotone',
              fill: false,
              label: "puissance (nb coeurs) X10",
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
            data: [0, 0, 0, 0, 0, 0, 280, 357, 725, 1250, 1549, 1819,],
            borderColor: "#00CC00",
            pointBackgroundColor: '#d200f7',
            pointBorderColor: '#fff',
            cubicInterpolationMode: 'monotone',
            fill: false,
            label: "prix d'achat",
            pointRadius: 3.6,
            pointHoverRadius: 7.6,
        },
      ],
  },
  options: {
      scales: {
          y: {

          }
      },
      animations: {
          y: {
              easing: 'easeInOutElastic'
          }
      },
  }
  });

//frise_processeur

const processeur_frises = document.getElementById('processeur_canvas').getContext('2d');
const processeur_canvas = new Chart(processeur_frises, {
  type: 'line',
  data: {
      labels: ["2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022",],
      datasets: [
          {
              data: [0, 0, 0, 0, 0, 244, 170, 145, 180, 250, 350, 450,],
              borderColor: "#0066CC",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              label: "consommation d'énergie (W)",
              cubicInterpolationMode: 'monotone',
              fill: false,
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
              data: [0, 0, 0, 0, 0, 51.2, 130.0, 166.0, 256.0, 435.2, 1049.6, 1638.4,],
              borderColor: "#ff8000",
              pointBackgroundColor: '#d200f7',
              pointBorderColor: '#fff',
              cubicInterpolationMode: 'monotone',
              fill: false,
              label: "puissance (nb coeurs) X10",
              pointRadius: 3.6,
              pointHoverRadius: 7.6,
          },
          {
            data: [0, 0, 0, 0, 0, 0, 280, 357, 725, 1250, 1549, 1819,],
            borderColor: "#00CC00",
            pointBackgroundColor: '#d200f7',
            pointBorderColor: '#fff',
            cubicInterpolationMode: 'monotone',
            fill: false,
            label: "prix d'achat",
            pointRadius: 3.6,
            pointHoverRadius: 7.6,
        },
      ],
  },
  options: {
      scales: {
          y: {

          }
      },
      animations: {
          y: {
              easing: 'easeInOutElastic'
          }
      },
  }
  });