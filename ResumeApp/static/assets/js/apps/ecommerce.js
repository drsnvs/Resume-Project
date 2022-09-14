$(document).ready(function() {
  var toggle;
  $('.product-details-wishlist').on('click', function () {
    toggle = !toggle;
    var myId = document.getElementById('heartIcon');
    if(toggle){
      myId.classList.remove("lar");
      myId.classList.add("las");
    } else if(!toggle) {
      myId.classList.remove("las");
      myId.classList.add("lar");
    }
  });
  $('.item-content').on('click', function(){
		window.location.href = 'apps_ecommerce_product_details.html';
		return false;
	});
  $('#input-search').on('keyup', function() {
    var rex = new RegExp($(this).val(), 'i');
    $('.searchable-items .items:not(.items-header-section)').hide();
    $('.searchable-items .items:not(.items-header-section)').filter(function() {
        return rex.test($(this).text());
    }).show();
  });
  $('#input-search-seller').on('keyup', function() {
    var rex = new RegExp($(this).val(), 'i');
    $('.searchable-items .col-xl-3').hide();
    $('.searchable-items .col-xl-3').filter(function() {
        return rex.test($(this).text());
    }).show();
  });
  $('.view-grid').on('click', function(event) {
    setTimeout(() => {
      event.preventDefault();
      $(this).parents('.switch').find('.view-list').removeClass('active-view');
      $(this).addClass('active-view');
      $(this).parents('.searchable-container').removeClass('list');
      $(this).parents('.searchable-container').addClass('grid');
      $(this).parents('.searchable-container').find('.searchable-items').removeClass('list');
      $(this).parents('.searchable-container').find('.searchable-items').addClass('grid'); 
    }, 200);
  });
  $('.view-list').on('click', function(event) {
    setTimeout(() => {
      event.preventDefault();
      $(this).parents('.switch').find('.view-grid').removeClass('active-view');
      $(this).addClass('active-view');
      $(this).parents('.searchable-container').removeClass('grid');
      $(this).parents('.searchable-container').addClass('list');
      $(this).parents('.searchable-container').find('.searchable-items').removeClass('grid');
      $(this).parents('.searchable-container').find('.searchable-items').addClass('list');
    }, 200);
  });
});
try {
  /* Transactions Monthly - Options */
  var options1 = {
    chart: {
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      type: 'area',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 5,
        left: -7,
        top: 22
      },
      toolbar: {
        show: false
      },
      events: {
        mounted: function(ctx, config) {
          const highest1 = ctx.getHighestValueInSeries(0);
          const highest2 = ctx.getHighestValueInSeries(1);
          ctx.addPointAnnotation({
            x: new Date(ctx.w.globals.seriesX[0][ctx.w.globals.series[0].indexOf(highest1)]).getTime(),
            y: highest1,
            label: {
              style: {
                cssClass: 'd-none'
              }
            },
            customSVG: {
              SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#009688" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
              cssClass: undefined,
              offsetX: -8,
              offsetY: 5
            }
          })
          ctx.addPointAnnotation({
            x: new Date(ctx.w.globals.seriesX[1][ctx.w.globals.series[1].indexOf(highest2)]).getTime(),
            y: highest2,
            label: {
              style: {
                cssClass: 'd-none'
              }
            },
            customSVG: {
              SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#e7515a" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
              cssClass: undefined,
              offsetX: -8,
              offsetY: 5
            }
          })
        },
      }
    },
    colors: ['#009688', '#e7515a'],
    dataLabels: {
        enabled: false
    },
    markers: {
      discrete: [{
      seriesIndex: 0,
      dataPointIndex: 7,
      fillColor: '#000',
      strokeColor: '#000',
      size: 5
    }, {
      seriesIndex: 2,
      dataPointIndex: 11,
      fillColor: '#000',
      strokeColor: '#000',
      size: 4
    }]
    },
    subtitle: {
      text: 'Monthly Revenue',
      align: 'left',
      margin: 0,
      offsetX: -10,
      offsetY: 35,
      floating: false,
      style: {
        fontSize: '14px',
        color:  '#888ea8'
      }
    },
    title: {
      text: '$9,789',
      align: 'left',
      margin: 0,
      offsetX: -10,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '25px',
        color:  '#515365'
      },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 2,
        lineCap: 'square'
    },
    series: [{
        name: 'Total Sales',
        data: [3085, 2084, 3589, 12458, 4258, 6851, 2145, 7845, 3230, 9250, 7636, 1248]
    }, {
        name: 'Total Commissions',
        data: [1000, 1856, 2415, 10568, 3542, 4856, 1000, 5869, 2000, 8596, 6999, 1025]
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: true
      },
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          cssClass: 'apexcharts-xaxis-title',
        },
      }
    },
    yaxis: {
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
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
        right: 0,
        bottom: 0,
        left: -10
      }, 
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
    fill: {
      type:"gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: .28,
        opacityTo: .05,
        stops: [45, 100]
      }
    },
    responsive: [{
      breakpoint: 575,
      options: {
        legend: {
            offsetY: -30,
        },
      },
    }]
  }
  /* Top countries by sales - Options */
  var options = {
    series: [90, 75, 67, 83],
    chart: {
    height: 305,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '15px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
        },
        value: {
          fontSize: '15px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
        },
        total: {
          show: true,
          label: 'Total',
          color: '##515365',
          fontWeight: 700,
          formatter: function (w) {
            return 5478
          }
        }
      }
    }
  },
  labels: ['USA', 'China', 'France', 'Germany'],
  }
  /* Order Status - Options */
  var options3 = {
    series: [{
      name: 'Successful',
      data: [76, 85, 101, 98, 87, 105, 91, 14, 94]
    }, {
      name: 'Cancelled',
      data: [44, 15, 27, 76, 11, 58, 13, 20, 26]
    }, {
      name: 'Processing',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }, {
      name: 'Failed',
      data: [25, 31, 16, 6, 25, 10, 20, 13, 11]
    }],
      chart: {
      type: 'bar',
      height: 350,
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    colors: ['#009688', '#e2a03f','#2196f3','#e7515a'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
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
    labels: {
        offsetX: -22,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
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
        right: 0,
        bottom: 0,
        left: -10
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
    fill: {
      opacity: 1
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
  /*************************** Render Charts Script **************************/
  /* Transactions Monthly - Render */
  var chart1 = new ApexCharts(
    document.querySelector("#transactionsMonthly"),
    options1
  );
  chart1.render();
  /* Top countries by sales - Render */
  var chart = new ApexCharts(
    document.querySelector("#chart-2"),
    options
  );
  chart.render();
  /* Order Status - Render */
  var chart = new ApexCharts(
    document.querySelector("#orderStatus"),
    options3
  );
  chart.render();
} catch(e) {
  console.log(e);
}
