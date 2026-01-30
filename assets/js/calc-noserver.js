const form = document.getElementById('calc');
const OutputArea = document.getElementById('output');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    handleFormSubmit(event);
});
const IncorrectMessage = `Incorrect`;
const NoAnswerMessage = `Cannot calculate if there is no operator, first number, or/and second number`;
const CorrectMessage = `Correct`;

function handleFormSubmit(event) {
    // first number
    const firstNumberValue = Number(document.getElementById('fNum').value);
    // second number
    const secondNumberValue = Number(document.getElementById('sNum').value)
    // operator
    const operatorTextValue = document.getElementById('operator').value;



if (isNaN(firstNumberValue) || isNaN(secondNumberValue) || operatorTextValue === "") {
        OutputArea.innerHTML = NoAnswerMessage;
        return;
}

if (operatorTextValue === "equals") {
if (firstNumberValue === secondNumberValue) {
    OutputArea.innerHTML = CorrectMessage;
} else {
    OutputArea.innerHTML = IncorrectMessage;
}
} else if (operatorTextValue === "plus") {
    OutputArea.innerHTML = firstNumberValue + secondNumberValue;
} else if (operatorTextValue === "divide") {
    OutputArea.innerHTML = firstNumberValue / secondNumberValue;
} else if (operatorTextValue === "minus") {
    OutputArea.innerHTML = firstNumberValue - secondNumberValue;
} else if (operatorTextValue === "times") {
    OutputArea.innerHTML = firstNumberValue * secondNumberValue;
} else {
        OutputArea.innerHTML = "Unknown operator";
    }}