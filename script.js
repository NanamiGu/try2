

// محاكاة تحديث حالة الساحة تلقائياً (Random Status)
const statuses = ['Normal', 'Busy', 'Very Busy'];
const yardStatusElement = document.getElementById('yard-status');

setInterval(() => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    yardStatusElement.textContent = randomStatus;
    yardStatusElement.style.color = randomStatus === 'Very Busy' ? 'red' : 'green';
}, 10000); // يتغير كل 10 ثواني كمثال