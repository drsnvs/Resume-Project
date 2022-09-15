try {
  /* Sales Report - Options */
  var options14 = {
    chart: {
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      type: 'bar',
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
    colors: ['#4d3b86', '#ff521d'],
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
    stroke: {
        show: true,
        curve: 'smooth',
        width: 2,
        lineCap: 'square'
    },
    series: [{
        name: 'Amount',
        data: [3085, 2084, 3589, 12458, 4258, 6851, 2145, 7845, 3230, 9250, 7636, 1248]
    }, {
        name: 'Invested',
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
  /* Daily Sales | Options */
  var d_2options1 = {
    chart: {
      height: 160,
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
  /* Target Sales - Options */
  var options4 = {
    series: [{
      name: 'Target Sales',
      type: 'column',
      data: [4400, 5050, 4140, 6710, 2270, 4130, 2010, 3520, 7520, 3200, 2570, 1600]
    }, {
      name: 'Total Achieve',
      type: 'line',
      data: [4000, 5100, 4500, 6000, 2000, 4000, 2090, 3500, 7000, 3000, 2800, 2000]
    }],
      chart: {
      height: 350,
      type: 'line',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 4]
    },
    colors: ['#2262c6', '#e7515a'],
    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 5,
      left: -7,
      top: 22
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style: {
        colors: ['#ffffff', '#e7515a'],
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: [{
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
        },
        offsetX: -15,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    },{
      opposite: true,
      labels: {
        formatter: function(value, index) {
          return (value / 1000) + 'K'
        },
        offsetX: -10,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
            cssClass: 'apexcharts-yaxis-title',
        },
      }
    }],
    xaxis: {
      // type: 'datetime',
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
  }
  /* Company Growth - Options */
  var options5 = {
    series: [67],
      chart: {
      height: 300,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            color: "#2262c6",
            fontWeight: 'bold',
            offsetY: 90
          },
          value: {
            offsetY: 50,
            fontSize: '25px',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            color: "#333333",
            formatter: function (val) {
              return val + "%";
            }
          },
        }
      }
    },
    fill: {
      type: 'gradient',
      colors: "#3bda39",
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Company Growth'],
  }
  /* Conversion Rate - Options */
  var options6 = {
    series: [{
      name: 'Converted',
      data: [{
          x: 1996,
          y: 32200
        },
        {
          x: 1997,
          y: 32400
        },
        {
          x: 1998,
          y: 32900
        },
        {
          x: 1999,
          y: 34200
        },
        {
          x: 2000,
          y: 34800
        },
        {
          x: 2001,
          y: 33400
        },
        {
          x: 2002,
          y: 32500
        },
        {
          x: 2003,
          y: 31600
        },
        {
          x: 2004,
          y: 31800
        },
        {
          x: 2005,
          y: 33000
        },
        {
          x: 2006,
          y: 35500
        },
        {
          x: 2007,
          y: 36600
        },
        {
          x: 2008,
          y: 33700
        },
        {
          x: 2009,
          y: 35200
        },
        {
          x: 2010,
          y: 37700
        },
        {
          x: 2011,
          y: 38300
        },
        {
          x: 2012,
          y: 34400
        },
        {
          x: 2013,
          y: 36600
        },
        {
          x: 2014,
          y: 38900
        },
        {
          x: 2015,
          y: 33400
        }
      ]
    }, {
      name: 'Not Converted',
      data: [
        {
          x: 1996,
          y: 16200
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
          y: -4500
        },
        {
          x: 2002,
          y: -8800
        },
        {
          x: 2003,
          y: -12000
        },
        {
          x: 2004,
          y: -15600
        },
        {
          x: 2005,
          y: -12300
        },
        {
          x: 2006,
          y: -8800
        },
        {
          x: 2007,
          y: -6600
        },
        {
          x: 2008,
          y: -4500
        },
        {
          x: 2009,
          y: -2900
        },
        {
          x: 2010,
          y: -4500
        },
        {
          x: 2011,
          y: -8800
        },
        {
          x: 2012,
          y: -13200
        },
        {
          x: 2013,
          y: -14600
        },
        {
          x: 2014,
          y: -16900
        },
        {
          x: 2015,
          y: -18400
        }
      ]
    }],
      chart: {
      type: 'area',
      height: 300,
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
  /* Registration Types - Options */
  var options7 = {
    series: [45, 30, 25],
    chart: {
      height: 300,
      type: 'pie',
      fontFamily: 'Poppins, sans-serif',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#244b83', '#db2722', '#a0a0a0'],
    labels: ['Facebook', 'Google', 'Email'],
    legend: {
      position: 'bottom',
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
        offsetY: 20,
      },    
      itemMargin: {
        horizontal: 0,
        vertical: 10
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      marker: {
        show: true,
      },
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
  }
  /* Items Sold - Options */
  var options8 = {
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
  /* Social Media Traffic - Options */
  var options9 = {
    series: [{
      name: 'Instagram',
      data: [
        [13.6, 4.3],
        [13.6, 12],
        [25.9, 12],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 8],
        [10.5, 10],
        [10.9, 17],
        [8.1, 4.7],
      ]
    }, {
      name: 'Facebook',
      data: [
        [5.4],
        [11.7, 4],
        [15.4, 3],
        [9, 10],
        [10.9, 11],
        [3.9, 11],
        [21.9, 8.2],
        [6.4, 11],
        [11.6, 13]
      ]
    }],
      chart: {
      height: 370,
      type: 'scatter',
      fontFamily: 'Poppins, sans-serif',
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#db2722','#244b83'],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
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
    markers: {
      size: 20
    },
    fill: {
      type: 'image',
      opacity: 1,
      image: {
        src: ['assets/img/instagram-icon.png', 'assets/img/facebook-icon.png'],
        width: 40,
        height: 40
      }
    },
    legend: {
      show:false,
      position: 'bottom',
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
        offsetY: 10,
      },    
      itemMargin: {
        horizontal: 20,
        vertical: 10
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      marker: {
        show: true,
      },
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
        left: 20
      },
    },
  }
  /* User Status Progress 1 - Options */
  var options10 = {
    series: [75],
    chart: {
    height: 200,
    type: 'radialBar',
    fontFamily: 'Poppins, sans-serif',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: '#888',
          fontSize: '13px',
          fontFamily: 'Poppins, sans-serif',
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '40px',
          fontFamily: 'Poppins, sans-serif',
          show: true,
        }
      }
    }
  },
  fill: {
    colors: ['#0045ff'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#0081ff'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent'],
  }
  /* User Status Progress 2 - Options */
  var options11 = {
      series: [35],
      chart: {
      height: 200,
      type: 'radialBar',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: '#888',
            fontSize: '13px',
            fontFamily: 'Poppins, sans-serif',
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '40px',
            fontFamily: 'Poppins, sans-serif',
            show: true,
          }
        }
      }
    },
    fill: {
      colors: ['#c71d6f'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#d09693'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  }
  /* Social Media Campaigns 1 - Options */
  var options12 = {
    series: [{
      name: 'Series 1',
      data: [50, 60, 40, 30, 50, 40, 63, 40, 30, 50, 80, 73],
      enabled:false
    }],
      chart: {
      height: 290,
      type: 'radar',
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    title: {
      enabled:false,
      text: ''
    },
    colors: ['#FF4560'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2,
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    yaxis: {
      tickAmount: 12,
      labels: {
        formatter: function(val, i) {
          if (i % 2 === 0) {
            return val
          } else {
            return ''
          }
        }
      }
    }
  }
  /* Expense Summary - Options */
  var options13 = {
    series: [80],
    chart: {
      height: 200,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            color: "#e7515a",
            fontWeight: 'bold',
            offsetY: 90
          },
          value: {
            offsetY: 50,
            fontSize: '25px',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            color: "#333333",
            formatter: function (val) {
              return val + "%";
            }
          },
        }
      }
    },
    fill: {
      type: 'gradient',
      colors: "#e7515a",
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 3
    },
    labels: ['More than last month'],
  }
  /*************************** Render Charts Script ************************** /
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
  /* Daily Sales - Render */
  var d_2C_1 = new ApexCharts(
    document.querySelector("#daily-sales"), 
    d_2options1
  );
  d_2C_1.render();
  /* Target Sales - Render */
  var chart = new ApexCharts(
    document.querySelector("#targetSales"),
    options4
  );
  chart.render();
  /* Company Growth - Render */
  var chart = new ApexCharts(
    document.querySelector("#companyGrowth"),
    options5
  );
  chart.render();
  /* Conversion Rate - Render */
  var chart = new ApexCharts(
    document.querySelector("#conversion-rate"),
    options6
  );
  chart.render();
  /* Registration Types - Render */
  var chart = new ApexCharts(
    document.querySelector("#registration-types"),
    options7
  );
  chart.render();
  /* Items Sold - Render */
  var chart = new ApexCharts(
    document.querySelector("#item-sold"),
    options8
  );
  chart.render();
  /* Social Media Traffic - Render */
  var chart = new ApexCharts(
    document.querySelector("#social-media-traffic"),
    options9
  );
  chart.render();
  /* User Status Progress 1 - Render */
  var chart = new ApexCharts(
    document.querySelector("#user-status-progress1"),
    options10
  );
  chart.render();
  /* User Status Progress 2 - Render */
  var chart = new ApexCharts(
    document.querySelector("#user-status-progress2"),
    options11
  );
  chart.render();
  /* Social Media Campaigns 1 */
  var chart = new ApexCharts(
    document.querySelector("#social-media-campaigns1"),
    options12
  );
  chart.render();
  /* Expense Summary - Render */
  var chart = new ApexCharts(
    document.querySelector("#expenseSummary"),
    options13
  );
  chart.render();
  /* Sales Report - Render */
  var chart = new ApexCharts(
    document.querySelector("#salesReport"),
    options14
  );
  chart.render();
  /* Dashboard To Do List */
  $(document).ready(function(){
    $("#showToDoinput").click(function(){
      $("#toDoInputContainer").slideToggle();
    });
  });
  /*************************** Other Script ************************** /
  /* Date Range Picker */
  var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
    mode: "range",
  });
} catch(e) {
    console.log(e);
}