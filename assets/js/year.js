const OutputArea = document.getElementById('output');
// Year Func
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    handleFormSubmit(event);
    event.preventDefault();
});
function handleFormSubmit(event) {
    const today = new Date();
    const currentYear = today.getFullYear();
    OutputArea.innerHTML = currentYear;
}
// ----------
// Reset Func
const reset = document.getElementById('reset');
reset.addEventListener('submit', function (event){
    handleResetSubmit(event);
    event.preventDefault();
});
function handleResetSubmit(event) {
    location.reload();
}