// Sidebar Toggle Functionality
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const mainContent = document.getElementById('main-content');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('sidebar-open');
});

// Market Share Chart - Pie Chart
const marketShareChart = new Chart(document.getElementById('marketShareChart'), {
    type: 'doughnut',
    data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        }],
    },
    options: {
        responsive: true,
    },
});

// Total Sales Chart - Line Chart
const salesChart = new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Total Sales',
            data: [200, 400, 300, 500, 700],
            borderColor: '#4e73df',
            fill: false,
        }],
    },
    options: {
        responsive: true,
    },
});

const doctor = document.getElementById('doctor');
const patient = document.getElementById('patient');

doctor.addEventListener('click', function() {
  doctor.classList.add('active');
  patient.classList.remove('active');
});

patient.addEventListener('click', function() {
  patient.classList.add('active');
  doctor.classList.remove('active');
});

