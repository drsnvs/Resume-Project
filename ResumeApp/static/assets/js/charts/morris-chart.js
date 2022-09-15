Morris.Area({
    element: 'graph',
    data: [
      {x: '2010 Q4', y: 3, z: 7},
      {x: '2011 Q1', y: 3, z: 4},
      {x: '2011 Q2', y: null, z: 1},
      {x: '2011 Q3', y: 2, z: 5},
      {x: '2011 Q4', y: 8, z: 2},
      {x: '2012 Q1', y: 4, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
  }).on('click', function(i, row){
    console.log(i, row);
});
// 2
Morris.Bar({
    element: 'graph2',
    data: [
      {x: '2011 Q1', y: 3, z: 2, a: 3},
      {x: '2011 Q2', y: 2, z: null, a: 1},
      {x: '2011 Q3', y: 0, z: 2, a: 4},
      {x: '2011 Q4', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A']
  }).on('click', function(i, row){
    console.log(i, row);
});
// 3
var decimal_data = [];
for (var x = 0; x <= 360; x += 10) {
  decimal_data.push({
    x: x,
    y: 1.5 + 1.5 * Math.sin(Math.PI * x / 180).toFixed(4)
  });
}
window.m = Morris.Line({
  element: 'graph3',
  data: decimal_data,
  xkey: 'x',
  ykeys: ['y'],
  labels: ['sin(x)'],
  parseTime: false,
  hoverCallback: function (index, options, default_content, row) {
    return default_content.replace("sin(x)", "1.5 + 1.5 sin(" + row.x + ")");
  },
  xLabelMargin: 10,
  integerYLabels: true
});
// 4
Morris.Donut({
    element: 'graph4',
    data: [
      {value: 70, label: 'Mobile', formatted: 'at least 70%' },
      {value: 15, label: 'Laptop', formatted: 'approx. 15%' },
      {value: 10, label: 'Headphone', formatted: 'approx. 10%' },
      {value: 5, label: 'Television', formatted: 'at most 5%' }
    ],
    formatter: function (x, data) { return data.formatted; }
});
// 5
Morris.Area({
    element: 'graph5',
    data: [
      {x: '2013-03-30 22:00:00', y: 3, z: 3},
      {x: '2013-03-31 00:00:00', y: 2, z: 0},
      {x: '2013-03-31 02:00:00', y: 0, z: 2},
      {x: '2013-03-31 04:00:00', y: 4, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
});
// 6
var week_data = [
    {"period": "2011 W27", "licensed": 3407, "sorned": 660},
    {"period": "2011 W26", "licensed": 3351, "sorned": 629},
    {"period": "2011 W25", "licensed": 3269, "sorned": 618},
    {"period": "2011 W24", "licensed": 3246, "sorned": 661},
    {"period": "2011 W23", "licensed": 3257, "sorned": 667},
    {"period": "2011 W22", "licensed": 3248, "sorned": 627},
    {"period": "2011 W21", "licensed": 3171, "sorned": 660},
    {"period": "2011 W20", "licensed": 3171, "sorned": 676},
    {"period": "2011 W19", "licensed": 3201, "sorned": 656},
    {"period": "2011 W18", "licensed": 3215, "sorned": 622},
    {"period": "2011 W17", "licensed": 3148, "sorned": 632},
    {"period": "2011 W16", "licensed": 3155, "sorned": 681},
    {"period": "2011 W15", "licensed": 3190, "sorned": 667},
    {"period": "2011 W14", "licensed": 3226, "sorned": 620},
    {"period": "2011 W13", "licensed": 3245, "sorned": null},
    {"period": "2011 W12", "licensed": 3289, "sorned": null},
    {"period": "2011 W11", "licensed": 3263, "sorned": null},
    {"period": "2011 W10", "licensed": 3189, "sorned": null},
    {"period": "2011 W09", "licensed": 3079, "sorned": null},
    {"period": "2011 W08", "licensed": 3085, "sorned": null},
    {"period": "2011 W07", "licensed": 3055, "sorned": null},
    {"period": "2011 W06", "licensed": 3063, "sorned": null},
    {"period": "2011 W05", "licensed": 2943, "sorned": null},
    {"period": "2011 W04", "licensed": 2806, "sorned": null},
    {"period": "2011 W03", "licensed": 2674, "sorned": null},
    {"period": "2011 W02", "licensed": 1702, "sorned": null},
    {"period": "2011 W01", "licensed": 1732, "sorned": null}
  ];
  Morris.Line({
    element: 'graph6',
    data: week_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    events: [
      '2011-04',
      '2011-08'
    ]
});
// 7
Morris.Bar({
    element: 'graph7',
    data: [
      {x: '2011 Q1', y: 3, z: 2, a: 3},
      {x: '2011 Q2', y: 2, z: null, a: 1},
      {x: '2011 Q3', y: 0, z: 2, a: 4},
      {x: '2011 Q4', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A'],
    stacked: true
});
// 8
var day_data = [
    {"period": "2012-10-01", "licensed": 3407},
    {"period": "2012-09-30", "sorned": 0},
    {"period": "2012-09-29", "sorned": 618},
    {"period": "2012-09-20", "licensed": 3246, "sorned": 661},
    {"period": "2012-09-19", "licensed": 3257, "sorned": null},
    {"period": "2012-09-18", "licensed": 3248, "other": 1000},
    {"period": "2012-09-17", "sorned": 0},
    {"period": "2012-09-16", "sorned": 0},
    {"period": "2012-09-15", "licensed": 3201, "sorned": 656},
    {"period": "2012-09-10", "licensed": 3215}
  ];
  Morris.Line({
    element: 'graph8',
    data: day_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned', 'other'],
    labels: ['Licensed', 'SORN', 'Other'],
    /* custom label formatting with `xLabelFormat` */
    xLabelFormat: function(d) { return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear(); },
    /* setting `xLabels` is recommended when using xLabelFormat */
    xLabels: 'day'
});