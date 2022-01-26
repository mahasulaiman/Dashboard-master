const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Age1', 'Age3', 'Age5', 'Age7', 'Age9', 'Age11',
    'Age13'],
        datasets: [{
        lineTension: 0.3,
        backgroundColor: "rgb(55, 49, 94, 0.5)",
        borderColor: "rgba(217,65,103,0.8)",
        PointBackgroundColor: "rgba(217,65,103,0.8)",
        pointBorderColor : "rgba(217,65,103,1)",
        pointHoverBackgroundColor: "rgba(217,65,103,0.8)",
        pointRadius: 5,
        pointHoverRadius: 5,
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data:[7559, 30201, 24201, 20012, 19501, 26011, 32420, 35012, 30087, 29515, 20215, 35785, 39741]
        }],
    },
    options: {
        scales: {
            xAxes:[{
                time:{
                    unit:'data'
                },
                gridLines:{
                    display: false
                },
                ticks:{
                    maxTicksLimit: 7,
                }
            }],
            yAxes:[{
                ticks:{
                    min:0,
                    max: 40000,
                    maxTicksLimit: 5
                }
            }],
            },
            legend: {
                display: false
            }
        }
});
const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November',
    'Decemder'],
        datasets: [{
             label: 'men',
            data: [0, 10000, 20000, 30000, 35000],
            backgroundColor: [
                'rgba(220, 92, 124, 1)'
            ],
            borderColor: [

                'rgba(220, 92, 124, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'women',
           data: [0, 35000, 30000, 20000, 10000],
           backgroundColor: [
               'rgba(128,0,128)',
               
           ],
           borderColor: [
               'rgba(128,0,128)'
           ],
           borderWidth: 3
       }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['riyadh', 'Jaddah', 'Sharqia', 'Mecca'],
        datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)',
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)',
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['January', 'Fedruary', 'March', 'April', 'May', 'June'],
        datasets: [{
        lineTension: 0.3,
        backgroundColor: "rgb(55, 49, 94, 0.5)",
        borderColor: "rgba(217,65,103,0.8)",
        PointBackgroundColor: "rgba(217,65,103,0.8)",
        pointBorderColor : "rgba(217,65,103,1)",
        pointHoverBackgroundColor: "rgba(217,65,103,0.8)",
        pointRadius: 5,
        pointHoverRadius: 5,
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data:[7559, 30201, 24201, 20012, 19501, 26011, 32420, 35012, 30087, 29515, 20215, 35785, 39741]
        }],
    },
    options: {
        scales: {
            xAxes:[{
                time:{
                    unit:'data'
                },
                gridLines:{
                    display: false
                },
                ticks:{
                    maxTicksLimit: 7,
                }
            }],
            yAxes:[{
                ticks:{
                    min:0,
                    max: 40000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    color: "rgb(55, 49, 94, 0.2)",
                }
            }],
            },
            legend: {
                display: false
            }
        }
});
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
