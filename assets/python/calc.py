from pyscript import document
from js import Number
from pyodide.ffi import create_proxy

# Messages
IncorrectMessage = "Incorrect"
NoAnswerMessage = "Cannot calculate if there is no operator, first number, or/and second number"
CorrectMessage = "Correct"

output_area = document.getElementById("output")


def handleFormSubmit(event):

    event.preventDefault()

    # Get values
    f_val = document.getElementById("fNum").value
    s_val = document.getElementById("sNum").value
    operator = document.getElementById("operator").value.strip()

    # Convert numbers safely
    try:
        firstNumberValue = float(f_val)
        secondNumberValue = float(s_val)
    except:
        output_area.innerText = NoAnswerMessage
        return

    LessCorrect1Message = f"Incorrect, {firstNumberValue} is less than {secondNumberValue}"
    MoreIncorrect1Message = f"Correct, {firstNumberValue} is more than {secondNumberValue}"
    LessIncorrect2Message = f"Incorrect, {secondNumberValue} is less than {firstNumberValue}"
    MoreCorrect2Message = f"Correct, {secondNumberValue} is more than {firstNumberValue}"

    if operator == "":
        output_area.innerText = NoAnswerMessage
        return

    if operator == "equals":
        if firstNumberValue == secondNumberValue:
            output_area.innerText = CorrectMessage
        else:
            output_area.innerText = IncorrectMessage

    elif operator == "plus":
        output_area.innerText = str(firstNumberValue + secondNumberValue)

    elif operator == "divide":
        output_area.innerText = str(firstNumberValue / secondNumberValue)

    elif operator == "minus":
        output_area.innerText = str(firstNumberValue - secondNumberValue)

    elif operator == "times":
        output_area.innerText = str(firstNumberValue * secondNumberValue)

    elif operator == ">":
        if firstNumberValue > secondNumberValue:
            output_area.innerText = MoreIncorrect1Message
        elif firstNumberValue < secondNumberValue:
            output_area.innerText = LessCorrect1Message

    elif operator == "<":
        if firstNumberValue < secondNumberValue:
            output_area.innerText = MoreCorrect2Message
        elif firstNumberValue > secondNumberValue:
            output_area.innerText = LessIncorrect2Message

    else:
        output_area.innerText = "Unknown operator"


# Attach event listener (like JS addEventListener)
form = document.getElementById("calc")
form.addEventListener("submit", create_proxy(handleFormSubmit))