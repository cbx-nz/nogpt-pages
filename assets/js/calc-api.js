const form = document.getElementById('calc');
const OutputArea = document.getElementById("output");

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault(); 

    // first number
    const firstNumberValue = Number(document.getElementById('fNum').value);
    // second number
    const secondNumberValue = Number(document.getElementById('sNum').value)
    // operator
    const operatorTextValue = document.getElementById('operator').value;

const data = {firstNumberValue, secondNumberValue, operatorTextValue}

fetch('http://localhost:3050/api/in' || 'http://localhost:3050/api/calc', {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    OutputArea.textContent = data.result;
})
.catch((err) => {
    OutputArea.textContent = "Server Error!";
    console.error('Error')});
};
