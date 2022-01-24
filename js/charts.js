const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Age1', 'Age3', 'Age5', 'Age7', 'Age9', 'Age11',
    'Age13'],
        datasets: [{
            data: [0, 30000, 25000, 20000, 20000, 27000, 32000, 35000, 30000, 30000, 20000, 37000, 40000],
            backgroundColor: [
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)',
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)',
                'rgba(128,0,128)',
                'rgba(220, 92, 124, 1)'
            ],
            borderColor: [
                'rgba(220, 92, 124, 1)',
                'rgba(220, 92, 124, 1)',
                'rgba(220, 92, 124, 1)',
                'rgba(220, 92, 124, 1)',
                'rgba(220, 92, 124, 1)',
                'rgba(220, 92, 124, 1)'
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
const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November',
    'Decemder'],
        datasets: [{
             label: 'men',
            data: [0, 10000, 20000, 30000, 40000],
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
            data: [0, 10000, 20000, 30000, 40000],
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
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'area',
    data: {
        labels: ['Age1', 'Age3', 'Age5', 'Age7', 'Age9', 'Age11',
    'Age13'],
        datasets: [{
            data: [0, 10000, 20000, 30000, 40000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
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
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
