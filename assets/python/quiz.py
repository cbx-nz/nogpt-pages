import random
from pyscript import document
from js import window

SCORE = 0
QUIZN = 1
questions = []


def quiz_area():
    return document.getElementById("quiz-area")


def result_area():
    return document.getElementById("result")


def show_question(q):
    global QUIZN

    html = f"<h3>Question {QUIZN}</h3>"
    html += f"<p>{q['question']}</p>"

    # Show full answer descriptions
    for key, text in q["answers"].items():
        html += f"<p>{key}: {text}</p>"
        html += f"<button onclick='check_answer(\"{key}\")'>Select {key}</button><br><br>"

    quiz_area().innerHTML = html


def check_answer(answer):
    global SCORE, QUIZN

    q = questions[QUIZN - 1]

    if answer.lower() == q["correct"].lower():
        SCORE += 1
    else:
        quiz_area().innerHTML += f"<p><b>{q['explanation']}</b></p>"

    QUIZN += 1

    if QUIZN <= len(questions):
        show_question(questions[QUIZN - 1])
    else:
        quiz_area().innerHTML = ""
        result_area().innerHTML = f"<h2>Total Score: {SCORE}</h2>"


def start_quiz(event=None):
    global questions, SCORE, QUIZN

    SCORE = 0
    QUIZN = 1
    result_area().innerHTML = ""

    questions = [
        {
            "question": "What does 'import random' do?",
            "answers": {
                "A": "Imports the library 'random'",
                "B": "Imports a random library",
                "C": "Imports already built-in commands",
                "D": "Makes all variables random"
            },
            "correct": "A",
            "explanation": "import random imports the library 'random'"
        },

        {
            "question": "Unlike other languages, Python requires indentation",
            "answers": {
                "True": "Python requires indentation",
                "False": "Python does not require indentation"
            },
            "correct": "True",
            "explanation": "Python requires indentation because it defines code blocks."
        },

        {
            "question": "Which function is used to display output in Python?",
            "answers": {
                "A": "echo()",
                "B": "print()",
                "C": "output()",
                "D": "write()"
            },
            "correct": "B",
            "explanation": "print() is used to display to the terminal"
        },

        {
            "question": "Which symbol is used for comments in Python?",
            "answers": {
                "A": "// hey",
                "B": "< !-- hey --! >",
                "C": "# hey",
                "D": "/* hello */"
            },
            "correct": "C",
            "explanation": "# symbol is used for comments in Python"
        },

        {
            "question": "Which data type stores text in Python?",
            "answers": {
                "A": "int",
                "B": "float",
                "C": "bool",
                "D": "str"
            },
            "correct": "D",
            "explanation": "str is the data type used to store text"
        }
    ]

    if document.getElementById("shuffle").checked:
        random.shuffle(questions)

    show_question(questions[0])


# expose function to browser
window.check_answer = check_answer