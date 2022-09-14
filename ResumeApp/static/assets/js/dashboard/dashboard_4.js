try { 
  /* Visit and Sales Options */
  var options1 = {
    series: [{
      name: 'Visit',
      data: [3100, 2500, 2800, 5100, 4200, 1090, 1000]
    }, {
      name: 'Sales',
      data: [260, 1200, 280, 3200, 4000, 500, 684]
    }],
      chart: {
      height: 350,
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'M'
        },
        offsetX: -22,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -50,
      fontSize: '13px',
      fontFamily: 'Poppins, sans-serif',
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },    
      itemMargin: {
        horizontal: 0,
        vertical: 20
      }
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
  }
  /* Statistics Options */  
  var options3 = {
    series: [{
      name: 'Added',
      data: [7, 8, 10, 9, 9, 8, 6, 9, 7, 7, 9, 5, 8, 4, 7, 8, 7, 5]
    }],
      chart: {
      height: 205,
      type: 'line',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [ '#e1e1e1'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    markers: {
      size: 4,
      colors: ["#FFFFFF"],
      strokeColors: "#b1b1b1",
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    yaxis: {
      labels: {
         offsetX: -22,
         offsetY: 0,
         show: false,
         style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
        },
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },   
      yaxis: {
        lines: {
          show: false,
        }
      }, 
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
  }
  /* Item Sold Options */
  var options6 = {
    chart: {
      height: 190,
      type: 'bar',
      stacked: true,
      fontFamily: 'Poppins, sans-serif',
      stackType: '100%',
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
    },
    colors: ['#009688', '#e7515a'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    series: [{
      name: 'Item Sold',
      data: [44, 55, 41, 67, 43, 21, 49]
    }, {
      name: 'Item Returned',
      data: [13, 23, 20, 8, 27, 33, 12]
    }],
    xaxis: {
      labels: {
        show: true,
      },
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '25%',
      }
    },
    legend: {
      show:false,
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      x: {
        show: false,
      }
    },
    grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      }, 
    },
  }
  /*************************** Render Charts Script **************************/
  /* Visit and Sales - Render */
  var chart1 = new ApexCharts(
    document.querySelector("#visitAndSales"),
    options1
  );
  chart1.render();
  /* Statistics - Render */
  var chart = new ApexCharts(
    document.querySelector("#statistics"),
    options3
  );
  chart.render();
  /* Item Sold - Render */
  var chart = new ApexCharts(
    document.querySelector("#item-sold"),
    options6
  );
  chart.render();
  /*************************** Other Script **************************/
  var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
    mode: "range",
  });
} catch(e) {
    console.log(e);
}