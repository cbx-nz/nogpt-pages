require('dotenv').config();
// Server Configuration
const express = require('express')
const path = require('path')
// --------------------------------------
// Server Variables
const PORT = process.env.PORT || 3050
const app = express()
// --------------------------------------
// Other Variables
const IncorrectMessage = `Incorrect`;
const NoAnswerMessage = `Cannot calculate if there is no operator, first number, or/and second number`;
const CorrectMessage = `Correct`;
// --------------------------------------
// show website
app.use(express.static(path.join(__dirname, 'pages')));
// --------------------------------------
// Other Code
app.use(express.json());
app.post("/api/in", (req, res) => {
const { firstNumberValue, secondNumberValue, operatorTextValue} = req.body;

if (isNaN(firstNumberValue) || isNaN(secondNumberValue) || !operatorTextValue) {
    return res.json({
        status: "error",
        result: NoAnswerMessage
    })
}
let result;

switch(operatorTextValue) {
    case "equals":
        result = firstNumberValue === secondNumberValue
        ? CorrectMessage
        : IncorrectMessage;
        break;
    case "plus":
        result = firstNumberValue + secondNumberValue;
        break;
    case "minus":
        result = firstNumberValue - secondNumberValue;
        break;
    case "times":
        result = firstNumberValue * secondNumberValue;
        break;
    case "divide":
        result = secondNumberValue === 0
        ? IncorrectMessage
        : firstNumberValue / secondNumberValue;
    break;
    default:
        result = "Unknown Operator";
}
res.json(
    {status: "ok",
        result
    }
)
});
//---------------------------------------
// console.log
app.listen(PORT, () => { 
    console.log("working");
    console.log("http://localhost:" + PORT)
 });
// --------------------------------------