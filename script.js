const ctx = document.getElementById('myChart');

const numberOfRows = 6;
const tagsInputs = [];
const valuesInputs = [];
const totalInput = document.getElementById('valueTotal');
let total = 0;

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
            'rgb(255, 205, 86)',
            'rgb(255,159,64)',
            'rgb(153,102,255)',
            'rgb(201,203,207)',
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
    total = valuesInputs.reduce((acc, curr) => acc + Number(curr.value), 0);
    totalInput.value = total;
    if (total === 100) {
        toggleAlert(true);
    } else {
        toggleAlert(false);
    }
    chart.update();
}

function toggleAlert(hide) {
    if (hide) {
        document.getElementById('alert').classList.add('hidden');
    } else {
        document.getElementById('alert').classList.remove('hidden');
    }
}

