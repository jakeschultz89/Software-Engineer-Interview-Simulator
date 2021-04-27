let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(O){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = '<img src=' + q.imgSrc + '>';
    questionContainerElement.innerHTML = '<p>' + q.question + '</p>';
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}





const questions = [
    {
    question: "How can you make a numbered list?",
    choiceA: "<ol>",
    choiceB: "<ul>",
    choiceC: "<list>",
    choiceD: "<nl>",
    correct: "A",
    },

    {
    question: "What is the correct HTML for making a text input field?",
    choiceA: "<textinput type='text'>",
    choiceB: "<input type='textfield'>",
    choiceC: "<input type='text'>",
    choiceD: "<textfield>",
    correct: "C",
    },

    {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choiceA: "In the <head> section",
    choiceB: "In the <body> section",
    choiceC: "At the end of the document",
    choiceD: "It automatically connects",
    correct: "A",
    },

    {
    question: "How do you select an element with id 'demo'?",
    choiceA: "#demo",
    choiceB: "demo",
    choiceC: ".demo",
    choiceD: "id-demo",
    correct: "A",
    },

    {
    question: "How do you select elements with class name 'test'?",
    choiceA: "#test",
    choiceB: "*test",
    choiceC: ".test",
    choiceD: "test {}",
    correct: "C",
    },

    {
    question: "How do you make the text bold?",
    choiceA: "font:bold;",
    choiceB: "font-weight:bold;",
    choiceC: "style:bold;",
    choiceD: "font-style: thicc bois;",
    correct: "B",
    },

    {
    question: "How does a FOR loop start?",
    choiceA: "while i = 1 to 10",
    choiceB: "while (i <= 10)",
    choiceC: "while (i <= 10; i++)",
    choiceD: "while i = (i++)",
    correct: "B",
    },

    {
    question: "How do you call a function named 'myFunction'?",
    choiceA: "myFunction()",
    choiceB: "call myFunction()",
    choiceC: "call function myFunction()",
    choiceD: "Hey Siri, call myFunction",
    correct: "A",
    },

    {
    question: "How do you create a function in JavaScript?",
    choiceA: "function = exampleFunction()",
    choiceB: "function:exampleFunction()",
    choiceC: "function exampleFunction() ",
    choiceD: "function.create",
    correct: "C",
    },

    { 
    question: "What is the correct way to write a JavaScript array?",
    choiceA: "let colors = 'red', 'green', 'blue'",
    choiceB: "let colors = (1:'red', 2:'green', 3:'blue')",        
    choiceC: "let colors = ['red', 'green', 'blue']",
    choiceD: "let array colors = 'red', 'green', blue'",
    correct: "C",
    },
]