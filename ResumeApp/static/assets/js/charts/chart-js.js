var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
// 1
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};
// 2
var horizontalBarChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};
// 3
var barChartDataMulti = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.green,
            window.chartColors.blue,
            window.chartColors.purple,
            window.chartColors.red
        ],
        yAxisID: 'y-axis-1',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: window.chartColors.grey,
        yAxisID: 'y-axis-2',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};
// 4
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            fill: false,
        }, {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
// 5
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
var config = {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'Cubic interpolation (monotone)',
            data: datapoints,
            borderColor: window.chartColors.red,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            cubicInterpolationMode: 'monotone'
        }, {
            label: 'Cubic interpolation (default)',
            data: datapoints,
            borderColor: window.chartColors.blue,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    suggestedMin: -10,
                    suggestedMax: 200,
                }
            }]
        }
    }
};
// 6
var color = Chart.helpers.color;
function generateData() {
    var data = [];
    for (var i = 0; i < 7; i++) {
        data.push({
            x: randomScalingFactor(),
            y: randomScalingFactor()
        });
    }
    return data;
}
var scatterChartData = {
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: generateData()
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: generateData()
    }]
};
// 7
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var config7 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
// 8
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var config8 = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true
    }
};
// 9
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var chartColors = window.chartColors;
var color = Chart.helpers.color;
var config9 = {
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                color(chartColors.red).alpha(0.5).rgbString(),
                color(chartColors.orange).alpha(0.5).rgbString(),
                color(chartColors.yellow).alpha(0.5).rgbString(),
                color(chartColors.green).alpha(0.5).rgbString(),
                color(chartColors.blue).alpha(0.5).rgbString(),
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: false,
            text: 'Chart.js Polar Area Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
};
// 10
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var color = Chart.helpers.color;
var config10 = {
    type: 'radar',
    data: {
        labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'My Second dataset',
            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};
// 11
var chartData11 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: window.chartColors.blue,
        borderWidth: 2,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};
// 12
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config12 = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Second dataset',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Third dataset',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Third dataset',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
window.onload = function() {
    // 1
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            }
        }
    });
    // 2
    var ctx2 = document.getElementById('canvas2').getContext('2d');
    window.myHorizontalBar = new Chart(ctx2, {
        type: 'horizontalBar',
        data: horizontalBarChartData,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            }
        }
    });
    // 3
    var ctx3 = document.getElementById('canvas3').getContext('2d');
    window.myBar = new Chart(ctx3, {
        type: 'bar',
        data: barChartDataMulti,
        options: {
            responsive: true,
            title: {
                display: false,
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
            }
        }
    });
    // 4
    var ctx4 = document.getElementById('canvas4').getContext('2d');
    window.myLine = new Chart(ctx4, config);
    // 5
    var ctx5 = document.getElementById('canvas5').getContext('2d');
    window.myLine = new Chart(ctx5, config);
    // 6
    var ctx6 = document.getElementById('canvas6').getContext('2d');
    window.myScatter = Chart.Scatter(ctx6, {
        data: scatterChartData,
        options: {
            title: {
                display: false,
                text: 'Chart.js Scatter Chart'
            },
        }
    });
    // 7
    var ctx7 = document.getElementById('canvas7').getContext('2d');
    window.myDoughnut = new Chart(ctx7, config7);
    // 8
    var ctx8 = document.getElementById('canvas8').getContext('2d');
    window.myPie = new Chart(ctx8, config8);
    // 9
    var ctx9 = document.getElementById('canvas9');
    window.myPolarArea = Chart.PolarArea(ctx9, config9);
    // 10
    window.myRadar = new Chart(document.getElementById('canvas10'), config10);
    // 11
    var ctx11 = document.getElementById('canvas11').getContext('2d');
    window.myMixedChart = new Chart(ctx11, {
        type: 'bar',
        data: chartData11,
        options: {
            responsive: true,
            title: {
                display: false,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });
    // 12
    var ctx12 = document.getElementById('canvas12').getContext('2d');
    window.myLine = new Chart(ctx12, config12);
};