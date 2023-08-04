const yearElement = document.querySelector('.year');
const monthElement = document.querySelector('.month');
const datesElement = document.querySelector('.dates');
const memoOverlay = document.querySelector('.memo-overlay');
const memoContainer = document.querySelector('.memo-container');
const memoDateElement = document.querySelector('.memo-date');
const memoInputElement = document.querySelector('.memo-input');

let currentDate = new Date();
let memoData = {};

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });

    yearElement.textContent = year;
    monthElement.textContent = month;

    datesElement.innerHTML = '';

    const firstDay = new Date(year, currentDate.getMonth(), 1);
    const lastDay = new Date(year, currentDate.getMonth() + 1, 0);

    const startDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyDate = document.createElement('div');
        emptyDate.className = 'date empty';
        datesElement.appendChild(emptyDate);
    }

    for (let date = 1; date <= lastDay.getDate(); date++) {
        const dateElement = document.createElement('div');
        dateElement.textContent = date;
        dateElement.className = 'date';
        dateElement.setAttribute('onclick', `showMemoForm(${date})`);

        const dateString = getDateString(currentDate, date);
        if (memoData[dateString]) {
            dateElement.classList.add('memo-exists');
        }

        datesElement.appendChild(dateElement);
    }
}

function prevM() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
}

function nextM() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
}

function getDateString(dateObj, day) {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    return `${month}/${day}`;
}

function showMemoForm(day) {
    const dateString = getDateString(currentDate, day);

    memoOverlay.style.display = 'block';
    memoContainer.style.display = 'block';
    memoDateElement.textContent = dateString;

    if (memoData[dateString]) {
        memoInputElement.value = memoData[dateString];
    } else {
        memoInputElement.value = '';
    }
}

function closeMemo() {
    memoOverlay.style.display = 'none';
    memoContainer.style.display = 'none';
}

function saveMemo() {
    const dateString = memoDateElement.textContent;
    const memo = memoInputElement.value.trim();

    if (memo !== '') {
        memoData[dateString] = memo;
        updateCalendar();
    }

    closeMemo();
}

updateCalendar();
