/* Conversion Rate - Options */
var options1 = {
  series: [{
    name: 'Resolved',
    data: [{
        x: 1996,
        y: 2200
      },
      {
        x: 1997,
        y: 2400
      },
      {
        x: 1998,
        y: 2900
      },
      {
        x: 1999,
        y: 4200
      },
      {
        x: 2000,
        y: 4800
      },
      {
        x: 2001,
        y: 3400
      },
      {
        x: 2002,
        y: 2500
      },
      {
        x: 2003,
        y: 1600
      },
      {
        x: 2004,
        y: 1800
      },
      {
        x: 2005,
        y: 3000
      },
      {
        x: 2006,
        y: 5500
      },
      {
        x: 2007,
        y: 6600
      },
      {
        x: 2008,
        y: 3700
      },
      {
        x: 2009,
        y: 5200
      },
      {
        x: 2010,
        y: 7700
      },
      {
        x: 2011,
        y: 8300
      },
      {
        x: 2012,
        y: 4400
      },
      {
        x: 2013,
        y: 6600
      },
      {
        x: 2014,
        y: 8900
      },
      {
        x: 2015,
        y: 3400
      }
    ]
  }, {
    name: 'Not Resolved',
    data: [
      {
        x: 1996,
        y: 6200
      },
      {
        x: 1997,
        y: 9000
      },
      {
        x: 1998,
        y: 5000
      },
      {
        x: 1999,
        y: 7700
      },
      {
        x: 2000,
        y: 3500
      },
      {
        x: 2001,
        y: 5500
      },
      {
        x: 2002,
        y: 8800
      },
      {
        x: 2003,
        y: 2000
      },
      {
        x: 2004,
        y: 5600
      },
      {
        x: 2005,
        y: 2300
      },
      {
        x: 2006,
        y: 8800
      },
      {
        x: 2007,
        y: 6600
      },
      {
        x: 2008,
        y: 4500
      },
      {
        x: 2009,
        y: 2900
      },
      {
        x: 2010,
        y: 4500
      },
      {
        x: 2011,
        y: 8800
      },
      {
        x: 2012,
        y: 3200
      },
      {
        x: 2013,
        y: 4600
      },
      {
        x: 2014,
        y: 6900
      },
      {
        x: 2015,
        y: 8400
      }
    ]
  }],
    chart: {
    type: 'area',
    height: 200,
    fontFamily: 'Poppins, sans-serif',
    toolbar: {
      show: false
    },
  },
  colors: ['#009688', '#e2a03f'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    type: 'year',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
      },
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
    labels: {
      formatter: function(value, index) {
        return (value / 1000) + 'K'
      },
      show: true,
      offsetX: -20,
      offsetY: 0,
      style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
      },
    },
  },
  fill: {
    opacity: 0.5
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
    borderColor: '#e0e6ed',
    strokeDashArray: 8,
    xaxis: {
        lines: {
            show: true
        }
    },   
    yaxis: {
        lines: {
            show: true,
        }
    },
    padding: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 10
    }, 
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: 0,
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
}
/* Daily Sales | Options */
var options2 = {
  chart: {
        height: 240,
        type: 'bar',
        stacked: true,
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
      name: 'Resolved',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
      name: 'Not Resolved',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    }],
    xaxis: {
        labels: {
            show: false,
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
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 0,
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
          bottom: -40,
          left: 0
        }, 
    },
}
/* Conversion Rate - Render */
var chart = new ApexCharts(
  document.querySelector("#conversion-rate"),
  options1
);
chart.render(); 
/* Daily Sales | Render */
var chart2 = new ApexCharts(
  document.querySelector("#customer-queries"),
  options2
);
chart2.render();
/*************************** Other Script **************************/
$('.cmt tr').on('click', function(){
  window.location.href = 'apps_ticket_details.html';
  return false;
});