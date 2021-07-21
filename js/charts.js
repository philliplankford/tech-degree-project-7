const trafficChart = document.getElementById('traffic-chart');
const dailytrafficChart = document.getElementById('daily-traffic-chart');
const mobileChart = document.getElementById('mobile-users-chart');

const trafficLabels = [
    '16-22', 
    '23-29', 
    '30-5', 
    '6-12', 
    '13-19', 
    '20-26', 
    '27-3', 
    '4-10', 
    '11-17', 
    '18-24', 
    '25-31'
];

const trafficData = {
    labels: trafficLabels,
    datasets: [{
        label: '',
        backgroundColor: 'rgb(116, 119, 191, .5)',
        borderColor: 'rgb(116, 119, 191, .5)',
        data: [550, 1400, 1000, 2000, 1500, 1600, 800, 1700, 2000, 1000, 2500]
    }]
};

const config = {
    type: 'line',
    data: trafficData,
    options: {
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

const buildtrafficChart = new Chart( trafficChart, config);

trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => { 
    // check if element is an li 
    let text = e.target.innerHTML;
    switch (text) {
        case 'Hourly':
            console.log(text);
            break;
        case 'Daily':
            console.log(text);
            break;
        case 'Weekly':
            console.log(text);
            break;
        case 'Monthly':
            console.log(text);
            break;
        default: 
        break;
    }
});

// DAILY

const dailyLabels = [
    'S', 
    'M', 
    'T', 
    'W', 
    'T', 
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
        plugins: {
            legend: {
                display: false,
            }
        }
    }
}

const builddailyChart = new Chart( dailytrafficChart, dailyConfig);

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
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
}

const buildmobileChart = new Chart( mobileChart, mobileConfig);