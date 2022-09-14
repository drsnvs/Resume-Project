try {
  /* Project Series Options */
  var options1 = {
    series: [{
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43]
    }, {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43]
    }, {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11]
    }, {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24]
    }],
      chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012],
      labels: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
      show:false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  /*************************** Render Charts Script **************************/
  /* Project Series - Render */
  var chart1 = new ApexCharts(
      document.querySelector("#projectSeries"),
      options1
  );
  chart1.render();
  /*************************** Other Script **************************/
  var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
    mode: "range",
  });
} catch(e) {
    console.log(e);
}