const trafficChart = document.getElementById('traffic-chart');
const dailytrafficChart = document.getElementById('daily-traffic-chart');
const mobileChart = document.getElementById('mobile-users-chart');

function updateChart(chart, newData) {
    chart.data.labels = newData.labels; 
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
}

const trafficDataHourly = {
    labels: ['16-22', '23-29','30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        label: '',
        backgroundColor: 'rgb(116, 119, 191, .5)',
        borderColor: 'rgb(116, 119, 191, .5)',
        data: [550, 1400, 1000, 2000, 1500, 1600, 800, 1700, 2000, 1000, 2500]
    }]
};

const trafficDataDaily = {
    labels: ['Su', 'M', 'T', 'W', 'Thu', 'F', 'S'],
    datasets: [{
        label: '',
        backgroundColor: 'rgb(116, 119, 191, .5)',
        borderColor: 'rgb(116, 119, 191, .5)',
        data: [900, 2000, 10, 94, 1500, 1000, 2222]
    }]
};

const trafficDataWeekly = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
        label: '',
        backgroundColor: 'rgb(116, 119, 191, .5)',
        borderColor: 'rgb(116, 119, 191, .5)',
        data: [100, 200, 400, 666, 420, 69]
    }]
};

const trafficDataMonthly = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: '',
        backgroundColor: 'rgb(116, 119, 191, .5)',
        borderColor: 'rgb(116, 119, 191, .5)',
        data: [400, 200, 900, 1000, 2020, 2021, 400, 500, 600, 700, 888, 910]
    }]
};

const trafficConfig = {
    type: 'line',
    data: {
        labels: ['16-22', '23-29','30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(116, 119, 191, .5)',
            borderColor: 'rgb(116, 119, 191, .5)',
            data: [550, 1400, 1000, 2000, 1500, 1600, 800, 1700, 2000, 1000, 2500]
        }]
    },
    options: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                min: 0,
                max: 2500,
            }
        },
        elements: {
            line: {
                fill: true,
                tension: .2,
            }
        }
    }
}

const buildtrafficChart = new Chart(trafficChart, trafficConfig);

let trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => { 
    if (e.target.tagName === 'LI') {
        let children = trafficNav.childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].tagName === 'LI') {
                children[i].className = '';
            }
        }
        let text = e.target.innerHTML;
        console.log(text);
        switch (text) {
            case 'Hourly':
                updateChart(buildtrafficChart, trafficDataHourly);
                break;
            case 'Daily':
                updateChart(buildtrafficChart, trafficDataDaily);
                break;
            case 'Weekly':
                updateChart(buildtrafficChart, trafficDataWeekly);
                break;
            case 'Monthly':
                updateChart(buildtrafficChart, trafficDataMonthly);
                break;
            default: 
                return;
            break;
        }
        console.log(e.target);
        e.target.className = 'active';
    }
});

// DAILY

const dailyLabels = [
    'Su', 
    'M', 
    'T', 
    'W', 
    'Th', 
    'F', 
    'S'
];

const dailyTraffic = {
    labels: dailyLabels,
    datasets: [{
        label: '',
        backgroundColor: '#7477bf',
        borderColor: 'rgb(255, 99, 132)',
        data: [55, 105, 175, 120, 210, 200, 100]
    }]
};

const dailyConfig = {
    type: 'bar',
    data: dailyTraffic,
    options: {
        aspectRatio: 1.9, 
        plugins: {
            legend: {
                display: false,
            }
        }
    }
}

const buildDailyChart = new Chart(dailytrafficChart, dailyConfig);

// Mobile
const mobileLabels= [
    'Desktop', 
    'Tablet', 
    'Phones'
];

const mobileData= {
    labels: mobileLabels,
    datasets: [{
        label: '',
        backgroundColor: [
            '#90ee90', 
            '#7477bf',
            '#51b6c8'
        ],
        data: [55, 105, 175]
    }]
};

const mobileConfig = {
    type: 'doughnut',
    data: mobileData,
    options: {
        aspectRatio: 1.9, 
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
}

const buildmobileChart = new Chart( mobileChart, mobileConfig);