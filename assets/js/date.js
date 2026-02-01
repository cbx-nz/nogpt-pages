const form = document.getElementById('form');
const OutputArea = document.getElementById('output');
const DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
form.addEventListener('submit', function (event) {
    handleFormSubmit(event);
    event.preventDefault();
});

function handleFormSubmit(event) {
    const today = new Date();
    const currentDate = today.toLocaleString('en-NZ', {dateStyle: 'long'});
    const currentTime = today.toLocaleTimeString();
    const currentDay = DaysOfWeek[today.getDay()];
    OutputArea.innerHTML = currentDay + '   ' + currentDate + '   ' + currentTime;
}

const reset = document.getElementById('reset');
reset.addEventListener('submit', function (event){
    handleResetSubmit(event);
    event.preventDefault();
});

function handleResetSubmit(event) {
    location.reload();
}