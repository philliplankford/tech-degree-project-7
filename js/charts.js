const trafficChart = document.getElementById('traffic-chart');

const trafficLabels = {
    hourly: {
        labels: [
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
        '25-31'],
        data: [
            550, 
            1400, 
            1000, 
            2000, 
            1500, 
            1600, 
            800, 
            1700, 
            2000, 
            1000, 
            2500],
    },
    daily: {
        labels: ['yolo'],
        data: [50],
    },
    weekly: {
        labels: [],
        data: [],
    },
    monthly: {
        labels: [],
        data: [],
    }
}

let selected = trafficLabels.hourly;
trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => { 
    // check if element is an li 
    let text = e.target.innerHTML;
    switch (text) {
        case 'Hourly':
            selected = trafficLabels.hourly;
            break;
        case 'Daily':
            selected = trafficLabels.daily;
            break;
        case 'Weekly':
            selected = trafficLabels.weekly;
            break;
        case 'Monthly':
            selected = trafficLabels.monthly;
            break;
        default: 
        break;
    }
    
});

let trafficData = {
    labels: selected.labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: selected.data
    }]
};

const config = new Chart(trafficChart, {
    type: 'line',
    data: trafficData,
    options: {}
});