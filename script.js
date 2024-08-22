document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('data-form');
    const statusMessage = document.getElementById('status-message');
    const feedContainer = document.getElementById('feed-container');
    const chartContainer = document.getElementById('chart-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const platformUrl = document.getElementById('platform-url').value;
        statusMessage.textContent = 'Fetching data...';
        fetchData(platformUrl);
    });

    function fetchData(url) {
        // Simulate data fetching
        setTimeout(() => {
            statusMessage.textContent = 'Data fetched successfully!';
            displayData([
                { platform: url, incident: 'Data breach in critical infrastructure', date: '2024-08-22' },
                { platform: url, incident: 'Malware detected in industrial control systems', date: '2024-08-21' },
            ]);
            generateVisualization();
        }, 2000);
    }

    function displayData(data) {
        feedContainer.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('incident');
            div.innerHTML = `<strong>${item.platform}</strong>: ${item.incident} <em>(${item.date})</em>`;
            feedContainer.appendChild(div);
        });
    }

    function generateVisualization() {
        chartContainer.innerHTML = '<canvas id="incidentChart"></canvas>';
        const ctx = document.getElementById('incidentChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Data Breach', 'Malware', 'Phishing', 'Ransomware'],
                datasets: [{
                    label: '# of Incidents',
                    data: [12, 19, 3, 5],
                    backgroundColor: ['#1a73e8', '#ffcb05', '#d9534f', '#5cb85c']
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
});
