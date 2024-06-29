const ctx = document.getElementById('myChart');

const numberOfRows = 3;
const tagsInputs = [];
const valuesInputs = [];

for (let i = 0; i < numberOfRows; i++) {
    tagsInputs.push(document.getElementById(`tag${i + 1}`));
    valuesInputs.push(document.getElementById(`value${i + 1}`));
}

const allInputs = [...tagsInputs, ...valuesInputs];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        updateChartData();
    });
})

const data = {
    labels: tagsInputs.map(x => x.value),
    datasets: [{
        data: valuesInputs.map(x => x.value),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
};

const chart = new Chart(ctx, config);

function updateChartData() {
    data.labels = tagsInputs.map(x => x.value);
    data.datasets[0].data = valuesInputs.map(x => x.value);
    chart.update();
}

