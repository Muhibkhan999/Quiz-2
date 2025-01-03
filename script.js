const questions = {
    easy: [
        {
            question: "What keyword is used to declare a variable in JavaScript?",
            options: ["A. var", "B. let", "C. const", "D. All of the above"],
            correct: "D"
        },
        {
            question: "What is the correct way to write a comment in JavaScript?",
            options: ["A. <!-- comment -->", "B. # comment", "C. // comment", "D. /* comment"],
            correct: "C"
        },
        {
            question: "What method is used to add an element at the end of an array?",
            options: ["A. push()", "B. pop()", "C. shift()", "D. unshift()"],
            correct: "A"
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: ["A. push()", "B. pop()", "C. shift()", "D. unshift()"],
            correct: "B"
        },
        {
            question: "What is the JavaScript keyword to declare a constant variable?",
            options: ["A. var", "B. let", "C. const", "D. constant"],
            correct: "C"
        },
        {
            question: "Which event occurs when a user clicks on an HTML element?",
            options: ["A. onmouseclick", "B. onclick", "C. onchange", "D. onmouseover"],
            correct: "B"
        },
        {
            question: "How do you declare a JavaScript array?",
            options: ["A. var colors = 'red', 'green', 'blue'", "B. var colors = ['red', 'green', 'blue']", "C. var colors = (1:'red', 2:'green', 3:'blue')", "D. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
            correct: "B"
        },
        {
            question: "Which operator is used to concatenate strings in JavaScript?",
            options: ["A. &", "B. +", "C. .", "D. ,"],
            correct: "B"
        },
        {
            question: "What will Math.floor(4.7) return?",
            options: ["A. 4", "B. 5", "C. 4.7", "D. 4.0"],
            correct: "A"
        },
        {
            question: "How do you find the length of a string in JavaScript?",
            options: ["A. str.size()", "B. str.length()", "C. str.length", "D. str.size"],
            correct: "C"
        }
    ],
    medium: [
        {
            question: "Which operator is used for strict equality comparison in JavaScript?",
            options: ["A. ==", "B. ===", "C. =", "D. !="],
            correct: "B"
        },
        {
            question: "Which function is used to parse a string to an integer in JavaScript?",
            options: ["A. Int.parse()", "B. parseInt()", "C. parseInteger()", "D. toInt()"],
            correct: "B"
        },
        {
            question: "What is the output of typeof null in JavaScript?",
            options: ["A. null", "B. undefined", "C. object", "D. number"],
            correct: "C"
        },
        {
            question: "What is the correct way to write a function in JavaScript?",
            options: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. function => myFunction()"],
            correct: "B"
        },
        {
            question: "Which method is used to join all elements of an array into a string?",
            options: ["A. concat()", "B. merge()", "C. join()", "D. combine()"],
            correct: "C"
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: ["A. Refers to the previous object", "B. Refers to the current object", "C. Refers to the parent object", "D. Refers to the global object"],
            correct: "B"
        },
        {
            question: "What is the correct way to write an IF statement in JavaScript?",
            options: ["A. if i = 5 then", "B. if i == 5 then", "C. if (i == 5)", "D. if i = 5"],
            correct: "C"
        },
        {
            question: "What is the correct way to write a FOR loop in JavaScript?",
            options: ["A. for (i <= 5; i++)", "B. for (i = 0; i <= 5)", "C. for i = 1 to 5", "D. for (i = 0; i <= 5; i++)"],
            correct: "D"
        },
        {
            question: "Which method removes the first element of an array?",
            options: ["A. shift()", "B. remove()", "C. delete()", "D. pop()"],
            correct: "A"
        },
        {
            question: "What is the result of 3 + '7' in JavaScript?",
            options: ["A. 10", "B. 37", "C. '37'", "D. Error"],
            correct: "C"
        }
    ],
    hard: [
        {
            question: "What is the purpose of the 'async' keyword in JavaScript?",
            options: ["A. Makes a function run synchronously", "B. Declares an asynchronous function", "C. Stops function execution", "D. Creates a new thread"],
            correct: "B"
        },
        {
            question: "How do you create a Promise in JavaScript?",
            options: ["A. new Promise()", "B. Promise.create()", "C. Promise.new()", "D. createPromise()"],
            correct: "A"
        },
        {
            question: "What does the 'spread' operator (...) do in JavaScript?",
            options: ["A. Concatenates arrays", "B. Expands elements", "C. Creates a copy", "D. All of the above"],
            correct: "D"
        },
        {
            question: "Which method is used to convert a JSON string to an object?",
            options: ["A. JSON.parse()", "B. JSON.stringify()", "C. JSON.toObject()", "D. JSON.convert()"],
            correct: "A"
        },
        {
            question: "What is the purpose of the 'map' method in JavaScript?",
            options: ["A. Creates a new object", "B. Modifies the original array", "C. Creates a new array with results", "D. Filters array elements"],
            correct: "C"
        },
        {
            question: "What is destructuring in JavaScript?",
            options: ["A. Breaking down code", "B. Extracting values from objects/arrays", "C. Removing elements", "D. Creating objects"],
            correct: "B"
        },
        {
            question: "What is the purpose of the 'reduce' method?",
            options: ["A. Reduces array size", "B. Accumulates values", "C. Removes duplicates", "D. Sorts elements"],
            correct: "B"
        },
        {
            question: "Which method is used to check if an array includes a certain element?",
            options: ["A. contains()", "B. has()", "C. includes()", "D. exists()"],
            correct: "C"
        },
        {
            question: "What is the purpose of the 'Set' object in JavaScript?",
            options: ["A. Store unique values", "B. Store ordered values", "C. Store key-value pairs", "D. Store functions"],
            correct: "A"
        },
        {
            question: "What is the difference between 'null' and 'undefined'?",
            options: ["A. They are the same", "B. null is assigned, undefined is not", "C. undefined is assigned, null is not", "D. No difference"],
            correct: "B"
        }
    ]
};
let currentQuestion = 0;
let score = 0;
let selectedDifficulty = '';
let startTime = Date.now();
let timer;
let totalTime = 180;
let timeLeft = totalTime;
let timerDisplay = document.getElementById("timer");
let progressBar = document.getElementById("progress-bar");
let progressContainer = document.getElementById("progress-container");

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerHTML = `Time Remaining: ${minutes}m ${seconds}s`;

        let progress = (timeLeft / totalTime) * 100;
        progressBar.style.width = progress + '%';

        if (timeLeft <= 0) {
            clearInterval(timer);
            showTimeUpMessage();
        }
    }, 1000);
}

function startQuiz(difficulty) {
    selectedDifficulty = difficulty;
    document.getElementById("difficulty-selection").style.display = 'none'; // Hide difficulty selection screen
    progressContainer.style.display = 'block'; // Show the progress bar
    showQuestion(); // Start showing questions
    startTimer(); // Start the timer
}

function showQuestion() {
    let q = questions[selectedDifficulty][currentQuestion];
    let container = document.getElementById("question-container");
    container.innerHTML = "";

    if (currentQuestion < questions[selectedDifficulty].length) {
        container.innerHTML = `
            <h3>Question ${currentQuestion + 1} of ${questions[selectedDifficulty].length}</h3> 
            <p>${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="answer" value="${option[0]}">
                    ${option}
                </label><br>
            `).join("")}
        `;
        document.getElementById("next-btn").style.display = "inline-block"; // Make sure Next button is visible after each question
    } else {
        showResults();
        document.getElementById("next-btn").style.display = "none"; // Hide the "Next" button at the end
    }
}

function loadNextQuestion() {
    checkAnswer();
    currentQuestion++; // Move to the next question after checking the answer
    showQuestion(); // Load the next question
}

function checkAnswer() {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return;

    if (selected.value === questions[selectedDifficulty][currentQuestion].correct) {
        score++;
    }
}

function showResults() {
    let container = document.getElementById("question-container");
    let endTime = Date.now();
    let timeTaken = ((endTime - startTime) / 1000); // Time taken in seconds
    let minutes = Math.floor(timeTaken / 60);
    let seconds = Math.floor(timeTaken % 60);

    let percent = (score / questions[selectedDifficulty].length) * 100;
    let grade = getGrade(percent);

    container.innerHTML = `
        <h2>Your Result!</h2>
        <p>Your Score: ${score} / ${questions[selectedDifficulty].length}</p>
        <p>Your Percentage: ${percent.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Time Taken: ${minutes} minutes ${seconds} seconds</p>
        <button onclick="goBack()">Go Back</button>
    `;
    document.getElementById("next-btn").style.display = "none"; // Hide the "Next" button after quiz ends
}

function showTimeUpMessage() {
    let container = document.getElementById("question-container");
    let motivationalMessages = [
        "Great job! You gave it your best effort. Keep up the good work!",
        "Well done! You're doing amazing! Keep pushing yourself.",
        "Good effort! Time doesn't define your potential. Keep learning!",
        "Fantastic! You are making progress every day. Keep going!"
    ];

    let randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    container.innerHTML = `
        <h2>Time's Up!</h2>
        <p>Your Time is up! The quiz has ended.</p>
        <p><strong>${randomMessage}</strong></p>
        <button onclick="goBack()">Go Back</button>
    `;
    document.getElementById("next-btn").style.display = "none"; // Hide the "Next" button after time is up
}

function goBack() {
    window.location.reload();
}

function getGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    return "D";
}
