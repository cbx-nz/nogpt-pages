const form = document.getElementById('form');
const OutputArea = document.getElementById('output');

form.addEventListener('submit', function (event) {
    handleFormSubmit(event);
    event.preventDefault();
});

function handleFormSubmit(event) {
    const today = new Date();
    const currentMonth = today.toLocaleString('en-NZ', {month: 'long'});
    OutputArea.innerHTML = currentMonth;
}

const reset = document.getElementById('reset');
reset.addEventListener('submit', function (event){
    handleResetSubmit(event);
    event.preventDefault();
});

function handleResetSubmit(event) {
    location.reload();
}