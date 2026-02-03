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

    const LessCorrect1Message = `Incorrect, ${firstNumberValue} is less than ${secondNumberValue}`;
    const MoreIncorrect1Message = `Correct, ${firstNumberValue} is more than ${secondNumberValue}`;
    const LessIncorrect2Message = `Incorrect, ${secondNumberValue} is less than ${firstNumberValue}`;
    const MoreCorrect2Message = `Correct, ${secondNumberValue} is more than ${firstNumberValue}`


if (isNaN(firstNumberValue) || isNaN(secondNumberValue) || operatorTextValue === "") {
        OutputArea.innerHTML = NoAnswerMessage;
        return;
}
// deal with later
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
} else if (operatorTextValue === ">") {
if (firstNumberValue > secondNumberValue) {
    OutputArea.innerHTML = MoreIncorrect1Message;
} else if (firstNumberValue < secondNumberValue) {
    OutputArea.innerHTML = LessCorrect1Message;
}
} else if (operatorTextValue === "<") {
if (firstNumberValue < secondNumberValue) {
    OutputArea.innerHTML = MoreCorrect2Message;
} else if (firstNumberValue > secondNumberValue) {
    OutputArea.innerHTML = LessIncorrect2Message;
}
}
 else {
        OutputArea.innerHTML = "Unknown operator";
    }};