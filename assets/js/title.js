const form = document.getElementById('titlechanger');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    handleFormSubmit(event);
});

function handleFormSubmit(event) {
    const titleValue = document.getElementById('titlechange').value.trim();

    if (titleValue !== "") {
    document.title = titleValue;
    } else document.title = " ";
}
