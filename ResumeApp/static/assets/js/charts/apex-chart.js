try {
  // Chart Options
  // Basic line chart - Options
  var basicLineChartOptions = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'line',
        zoom: {
        enabled: false
    }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
  // Line with data labels - Options
  var lineWithDataLabelOptions = {
    series: [
        {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
        }
    ],
        chart: {
            fontFamily: 'Poppins, sans-serif',
            height: 320,
            type: 'line',
            dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
        text: 'Month'
        }
    },
    yaxis: {
        title: {
        text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    }
  };
  // Zoomable Timeseries - Options
  var dashedOptions = {
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
      chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };
  // Stepline Chart - Options
  var steplineChartOptions = {
    series: [{
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
      chart: {
      type: 'line',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Current year sales',
      align: 'left'
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    }
  };
  // Basic Area Chart - Options
  var basicAreaChartOptions = {
    series: [{
      name: "STOCK ABC",
      data: [1000,2000,3000,4000,5000,6000]
    }],
      chart: {
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      zoom: {
        enabled: false
      },
      toolbar: {
          show: false
        },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };
  // Spline Area Chart - Options
  var splineAreaChartOptions = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      zoom: {
        enabled: false
      },
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
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
  // Negative Area Chart
  var negativeAreaChartOptions = {
    series: [{
        name: 'north',
        data: [{
            x: 1996,
            y: 322
          },
          {
            x: 1997,
            y: 324
          },
          {
            x: 1998,
            y: 329
          },
          {
            x: 1999,
            y: 342
          },
          {
            x: 2000,
            y: 348
          },
          {
            x: 2001,
            y: 334
          },
          {
            x: 2002,
            y: 325
          },
          {
            x: 2003,
            y: 316
          },
          {
            x: 2004,
            y: 318
          },
          {
            x: 2005,
            y: 330
          },
          {
            x: 2006,
            y: 355
          },
          {
            x: 2007,
            y: 366
          },
          {
            x: 2008,
            y: 337
          },
          {
            x: 2009,
            y: 352
          },
          {
            x: 2010,
            y: 377
          },
          {
            x: 2011,
            y: 383
          },
          {
            x: 2012,
            y: 344
          },
          {
            x: 2013,
            y: 366
          },
          {
            x: 2014,
            y: 389
          },
          {
            x: 2015,
            y: 334
          }
        ]
      }, {
        name: 'south',
        data: [
          {
            x: 1996,
            y: 162
          },
          {
            x: 1997,
            y: 90
          },
          {
            x: 1998,
            y: 50
          },
          {
            x: 1999,
            y: 77
          },
          {
            x: 2000,
            y: 35
          },
          {
            x: 2001,
            y: -45
          },
          {
            x: 2002,
            y: -88
          },
          {
            x: 2003,
            y: -120
          },
          {
            x: 2004,
            y: -156
          },
          {
            x: 2005,
            y: -123
          },
          {
            x: 2006,
            y: -88
          },
          {
            x: 2007,
            y: -66
          },
          {
            x: 2008,
            y: -45
          },
          {
            x: 2009,
            y: -29
          },
          {
            x: 2010,
            y: -45
          },
          {
            x: 2011,
            y: -88
          },
          {
            x: 2012,
            y: -132
          },
          {
            x: 2013,
            y: -146
          },
          {
            x: 2014,
            y: -169
          },
          {
            x: 2015,
            y: -184
          }
        ]
      }],
      chart: {
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        floating: false,
        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 0.5
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 20
        }
      }
  };
  // Null Area Chart - Options
  var nullAreaChartOptions = {
  series: [{
      name: 'Network',
      data: [{
          x: 'Dec 23 2017',
          y: null
        },
        {
          x: 'Dec 24 2017',
          y: 44
        },
        {
          x: 'Dec 25 2017',
          y: 31
        },
        {
          x: 'Dec 26 2017',
          y: 38
        },
        {
          x: 'Dec 27 2017',
          y: null
        },
        {
          x: 'Dec 28 2017',
          y: 32
        },
        {
          x: 'Dec 29 2017',
          y: 55
        },
        {
          x: 'Dec 30 2017',
          y: 51
        },
        {
          x: 'Dec 31 2017',
          y: 67
        },
        {
          x: 'Jan 01 2018',
          y: 22
        },
        {
          x: 'Jan 02 2018',
          y: 34
        },
        {
          x: 'Jan 03 2018',
          y: null
        },
        {
          x: 'Jan 04 2018',
          y: null
        },
        {
          x: 'Jan 05 2018',
          y: 11
        },
        {
          x: 'Jan 06 2018',
          y: 4
        },
        {
          x: 'Jan 07 2018',
          y: 15,
        },
        {
          x: 'Jan 08 2018',
          y: null
        },
        {
          x: 'Jan 09 2018',
          y: 9
        },
        {
          x: 'Jan 10 2018',
          y: 34
        },
        {
          x: 'Jan 11 2018',
          y: null
        },
        {
          x: 'Jan 12 2018',
          y: null
        },
        {
          x: 'Jan 13 2018',
          y: 13
        },
        {
          x: 'Jan 14 2018',
          y: null
        }
      ],
    }],
    chart: {
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.8,
      type: 'pattern',
      pattern: {
        style: ['verticalLines', 'horizontalLines'],
        width: 5,
        height: 6
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9
      }
    },
    tooltip: {
      intersect: true,
      shared: false
    },
    theme: {
      palette: 'palette1'
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Bytes Received'
      }
    }
  };
  // Basic Column Chart - Options
  var basicColumnChartOptions = {
      series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
      chart: {
      type: 'bar',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
    },
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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };
  // Grouped Bar Chart - Options
  var groupedBarChartOptions = {
  series: [{
      data: [44, 55, 41, 64, 22, 43, 21]
    }, {
      data: [53, 32, 33, 52, 13, 44, 32]
    }],
      chart: {
      type: 'bar',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  };
  // Negative Bar Chart - Options
  var negativeBarChartOptions = {
  series: [{
      name: 'Males',
      data: [4.2, 4.5,
        3.9, 3.5, 3
      ]
    },
    {
      name: 'Females',
      data: [
        -4.1, -4, -4.1, -3.4, -3.1, 
      ]
    }
    ],
      chart: {
      type: 'bar',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      stacked: true
    },
    colors: ['#008FFB', '#FF4560'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        // text: 'Age',
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val
        }
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%"
        }
      }
    },
    xaxis: {
      categories: [ '20-24', '15-19', '10-14', '5-9','0-4'],
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val)) + "%"
        }
      }
    },
  };
  // Line and Column Chart - Options
  var lineAndColumnChartOptions = {
      series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
      chart: {
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Traffic Sources'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Website Blog',
      },
    }, {
      opposite: true,
      title: {
        text: 'Social Media'
      }
    }]
  };
  // Line, Column and Area Chart - Options
  var lineColumnAreaChartOptions = {
      series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
      chart: {
      fontFamily: 'Poppins, sans-serif',
      height: 320,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
      '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    }
  };
  // Basic Radar Chart - Options
  var basicRadarChartOptions = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
        chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'radar',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      }
  };
  // Radial Bar - Options
  var radialBarOptions = {
    series: [44, 55, 67, 83],
      chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };
  // Pie Chart - Options
  var pieChartOptions = {
    series: [44, 55, 13, 43, 22],
      chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
  // Donut Chart - Options
  var donutChartOptions = {
    series: [44, 55, 41, 17, 15],
      chart: {
      type: 'donut',
      fontFamily: 'Poppins, sans-serif',
      height: 320,
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
  // Scatter Chart - Options
  var scatterChartOptions = {
    series: [{
        name: "SAMPLE A",
        data: [
        [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
      },{
        name: "SAMPLE B",
        data: [
        [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
      },{
        name: "SAMPLE C",
        data: [
        [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
      }],
        chart: {
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(1)
          }
        }
      },
      yaxis: {
        tickAmount: 7
    }
  };
  // Render Chart
  // Basic line chart - Render
  var basicLineChart = new ApexCharts(
    document.querySelector("#basicLineChart"),
    basicLineChartOptions
  );
  basicLineChart.render();
  // Line with data labels - Render
  var lineWithDataLabel = new ApexCharts(
    document.querySelector("#lineWithDataLabel"),
    lineWithDataLabelOptions
  );
  lineWithDataLabel.render();
  // Zoomable Timeseries - Render
  var dashed = new ApexCharts(
    document.querySelector("#dashed"),
    dashedOptions
  );
  dashed.render();
  // Stepline Chart - Render
  var steplineChart = new ApexCharts(
    document.querySelector("#steplineChart"),
    steplineChartOptions
  );
  steplineChart.render();
  // Basic Area Chart - Render
  var basicAreaChart = new ApexCharts(
    document.querySelector("#basicAreaChart"),
    basicAreaChartOptions
  );
  basicAreaChart.render();
  // Spline Area Chart - Render
  var splineAreaChart = new ApexCharts(
    document.querySelector("#splineAreaChart"),
    splineAreaChartOptions
  );
  splineAreaChart.render();
  // Negative Area Chart - Render
  var negativeAreaChart = new ApexCharts(
    document.querySelector("#negativeAreaChart"),
    negativeAreaChartOptions
  );
  negativeAreaChart.render();
  // Null Area Chart - Render
  var nullAreaChart = new ApexCharts(
    document.querySelector("#nullAreaChart"),
    nullAreaChartOptions
  );
  nullAreaChart.render();
  // Basic Column Chart - Render
  var basicColumnChart = new ApexCharts(
    document.querySelector("#basicColumnChart"),
    basicColumnChartOptions
  );
  basicColumnChart.render();
  // Grouped Bar Chart - Render
  var groupedBarChart = new ApexCharts(
    document.querySelector("#groupedBarChart"),
    groupedBarChartOptions
  );
  groupedBarChart.render();
  // Negative Bar Chart - Render
  var negativeBarChart = new ApexCharts(
    document.querySelector("#negativeBarChart"),
    negativeBarChartOptions
  );
  negativeBarChart.render();
  // Line and Column Chart - Render
  var lineAndColumnChart = new ApexCharts(
    document.querySelector("#lineAndColumnChart"),
    lineAndColumnChartOptions
  );
  lineAndColumnChart.render();
  // Line, Column and Area Chart - Render
  var lineColumnAreaChart = new ApexCharts(
    document.querySelector("#lineColumnAreaChart"),
    lineColumnAreaChartOptions
  );
  lineColumnAreaChart.render();
  // Basic Radar Chart - Render
  var basicRadarChart = new ApexCharts(
    document.querySelector("#basicRadarChart"),
    basicRadarChartOptions
  );
  basicRadarChart.render();
  // Radial Bar - Render
  var radialBar = new ApexCharts(
    document.querySelector("#radialBar"),
    radialBarOptions
  );
  radialBar.render();
  // Pie Chart - Render
  var pieChart = new ApexCharts(
    document.querySelector("#pieChart"),
    pieChartOptions
  );
  pieChart.render();
  // Donut Chart - Render
  var donutChart = new ApexCharts(
    document.querySelector("#donutChart"),
    donutChartOptions
  );
  donutChart.render();
  // Scatter Chart - Render
  var scatterChart = new ApexCharts(
    document.querySelector("#scatterChart"),
    scatterChartOptions
  );
  scatterChart.render();
} catch(e) {
  console.log(e);
}